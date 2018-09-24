import { PostDetailsPage } from './../../pages/post-details/post-details';
import { NavController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';

@Component({
	selector: 'posts',
	templateUrl: 'posts.html'
})
export class PostsComponent {
	posts: any;
    offset: number = 0;
    constructor(public navCtrl: NavController,
        private api:ApiProvider) {
		this.posts=[];
	}
	openPost(post) {
        this.navCtrl.push(PostDetailsPage,{
            post:post
        });
    }
    ionViewWillEnter(){
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

}
