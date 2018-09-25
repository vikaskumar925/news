import { Component } from '@angular/core';
import { IonicPage, NavController, Events, LoadingController } from 'ionic-angular';
import { PostDetailsPage } from '../post-details/post-details';
import { ApiProvider } from './../../providers/api/api';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})

export class HomePage {
    posts: any = [];
    offset: number = 0;
    constructor(public navCtrl: NavController,
        private api:ApiProvider,
        private events:Events,
        private loadingCtrl:LoadingController) {
            this.events.subscribe('search-result',response=>{
                this.posts =[];
                this.posts = response;
            });
    }
    openPost(post) {
        this.navCtrl.push(PostDetailsPage,{
            post:post
        });
    }
    ionViewWillEnter(){
        let loading = this.loadingCtrl.create({
            spinner: 'crescent',
          });
        
        loading.present();
        this.posts = this.api.getPosts(this.posts);
        setTimeout(()=>{
            loading.dismiss();
        },5000);
       
    }
    loadMoreData() {
        this.posts = this.api.getPosts(this.posts, this.offset);
    }
    doInfinite(infiniteScroll) {
        this.offset += 10;
        setTimeout(() => {
            this.loadMoreData();
            infiniteScroll.complete();
        }, 500);
    }
    doRefresh(refersher){
        console.log(refersher);
        refersher.complete();
    }
}
