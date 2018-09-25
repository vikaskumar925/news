import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
	selector: 'page-post-details',
	templateUrl: 'post-details.html',
})
export class PostDetailsPage {
	post:any;
	isBookmark:boolean = false;
	constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage) {
		this.post = this.navParams.get('post');
	}
	addBookmark(){
		this.storage.set(this.post.id.toString(),this.post);
		console.log(this.storage.get(this.post.id.toString()));
	}
	removeBookmark(){
		console.log("test");
	}
	share(){
		console.log("yuae");
	}

}
