import { BookmarkProvider } from './../../providers/bookmark/bookmark';
import { Component, ViewChild , ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
	selector: 'page-post-details',
	templateUrl: 'post-details.html',
})
export class PostDetailsPage {
	post:any;
	isBookmark:boolean = false;
	@ViewChild('message') message:ElementRef;
	constructor(public navCtrl: NavController, 
		public navParams: NavParams, 
		private bookmark:BookmarkProvider, 
		private socialSharing: SocialSharing) {
		this.post = this.navParams.get('post');
		this.bookmark.isBookmark(this.post.id).then(isMarked => {
			this.isBookmark = isMarked;
		});
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
	console.log(this.message.nativeElement.innerText);
		this.socialSharing.shareWithOptions({
			message:this.message.nativeElement.innerText,
			subject: this.post.title.rendered,
			url:this.post.link,
		});
	}

}
