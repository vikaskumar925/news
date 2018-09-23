import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
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
    categories:any =[];
    offset: number = 0;
    public isSearchbarOpened = false;
    constructor(public navCtrl: NavController,
        private api:ApiProvider) {
    }
    openPost(post) {
        this.navCtrl.push(PostDetailsPage,{
            post:post
        });
    }
    ionViewWillEnter(){
        this.categories = this.api.getCategories();
        this.posts = this.api.getPosts(this.posts);
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
    openCatPage(category){

    }
}
