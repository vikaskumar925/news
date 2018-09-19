import { Component } from '@angular/core';
import { IonicPage,NavController } from 'ionic-angular';
import { PostDetailsPage } from '../post-details/post-details';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public isSearchbarOpened = false;
  constructor(public navCtrl: NavController, private http:Http) {
   this.homecontent();
  }
home()
{
this.navCtrl.push(PostDetailsPage);
}
homecontent()
{   

	let url = "https://www.bhadas4media.com/wp-json/wp/v2/posts";

     let data = this.http.get(url);
     console.log(data);
}
}

