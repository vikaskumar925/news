import { Component } from '@angular/core';
import { IonicPage, NavController, Events, LoadingController } from 'ionic-angular';
import { PostDetailsPage } from '../post-details/post-details';
import { ApiProvider } from './../../providers/api/api';
import 'rxjs/add/operator/map';
import { iterateListLike } from '@angular/core/src/change_detection/change_detection_util';

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})

export class HomePage {
    posts: any = [];
    offset: number = 0;
    type:string ='post';
    searchTerm:string;
    constructor(public navCtrl: NavController,
        private api:ApiProvider,
        private events:Events,
        private loadingCtrl:LoadingController) {
        this.events.subscribe('search-result',response=>{
            this.posts =[];
            this.posts = response.data;
            this.type = 'search';
            this.searchTerm = response.searchTerm;
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
        this.api.getPosts(this.posts).subscribe(response =>{
            for (let item of response){
                this.api.getCategoryDetail(item.categories[0]).subscribe(result =>{
                    item.categoryData = result;
                });
            }
            console.log(this.posts);
            this.posts = response;
        });
        setTimeout(()=>{
            loading.dismiss();
        },5000);
       
    }
    loadMoreData() {
        if(this.type =='search'){
            this.posts = this.api.getSearchPosts(this.posts,this.searchTerm, this.offset);
        } else if(this.type =='category'){
            this.posts = this.api.getPosts(this.posts, this.offset);
        } else {
            this.posts = this.api.getPosts(this.posts, this.offset);
        }
        
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
