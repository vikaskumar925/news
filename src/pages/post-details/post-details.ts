import { BookmarkProvider } from './../../providers/bookmark/bookmark';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-post-details',
	templateUrl: 'post-details.html',
})
export class PostDetailsPage {
	post:any;
	isBookmark:boolean = false;
	constructor(public navCtrl: NavController, public navParams: NavParams,private bookmark:BookmarkProvider) {
		this.post = this.navParams.get('post');
		this.bookmark.isBookmark(this.post.id.toString()).then(isMarked => {
			this.isBookmark = isMarked;
		})
	}
	addBookmark(){
		this.bookmark.bookmarkPost(this.post,this.post.id.toString());
		this.isBookmark = true;
	}
	removeBookmark(){
		this.bookmark.removeBookmarkPost(this.post.id.toString());
		this.isBookmark = false;
	}
	share(){
		console.log("yuae");
	}

}
