import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-post-details',
	templateUrl: 'post-details.html',
})
export class PostDetailsPage {
	post:any;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.post = this.navParams.get('post');
	}

}
