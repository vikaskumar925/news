import { BookmarkProvider } from './../../providers/bookmark/bookmark';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-saved-posts',
	templateUrl: 'saved-posts.html',
})
export class SavedPostsPage {
	posts:any =[];
	constructor(public navCtrl: NavController, public navParams: NavParams, private bookmark: BookmarkProvider) {
	}

	ionViewWillEnter(){
		this.bookmark.getAllBookmarks().then(response => {
			this.posts = response;
		});
	}

}
