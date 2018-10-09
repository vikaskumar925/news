import { BookmarkProvider } from './../../providers/bookmark/bookmark';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { PostDetailsPage } from '../post-details/post-details';
@IonicPage()
@Component({
	selector: 'page-saved-posts',
	templateUrl: 'saved-posts.html',
})
export class SavedPostsPage {
	posts:any =[];
	offset: number = 0;
	constructor(public navCtrl: NavController, public navParams: NavParams, private bookmark: BookmarkProvider,private api: ApiProvider) {
	}
    openPost(post) {
        this.navCtrl.push(PostDetailsPage,{
            post:post
        });
    }
	ionViewWillEnter(){
		this.bookmark.getAllBookmarks().then(response => {
			this.posts = response;
		});
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
       // console.log(refersher);
        refersher.complete();
    }
}
