import { Component } from '@angular/core';
import { IonicPage,NavController } from 'ionic-angular';
import { PostDetailsPage } from '../post-details/post-details';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
 url ="https://www.bhadas4media.com/wp-json/wp/v2/posts";
posts : any = [];
limit: number = 10;
offset: number = 0; 
  public isSearchbarOpened = false;
  constructor(public navCtrl: NavController, private httpClient:HttpClient) {
   this.homecontent();
   
  }
home()
{
this.navCtrl.push(PostDetailsPage);
}
homecontent(){   


		this.httpClient.get<[any]>(this.url)
		.subscribe(data => {
            this.posts=data;		
		  });
	}
	loadMoreData() { 
		
    this.httpClient.get<[any]>(this.url + '?offset=' + this.offset)
        .subscribe(data => { 
        	for(let item of data){
               
                this.posts.push(item);
            }
        
    });

}
doInfinite(infiniteScroll) {
    this.offset += 10;
    setTimeout(() => {
        this.loadMoreData();
        infiniteScroll.complete();
    }, 500);
}
}
