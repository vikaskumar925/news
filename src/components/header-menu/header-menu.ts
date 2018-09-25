import { NavController, Events } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'header-menu',
	templateUrl: 'header-menu.html'
})
export class HeaderMenuComponent implements OnInit {
	@Input() type:string;
	categories:any =[];
	offset: number = 0;
	data:any=[];
	
	isSearchbarOpened:boolean = false;
	constructor(private api:ApiProvider, private nav:NavController,private events:Events) {
	}
	ngOnInit(){
        this.categories = this.api.getCategories();
	}
	openCatPage(category){
		
	}
	getSearch(e:any){
		this.data = this.api.getSearchPosts(this.data,e.target.value);
		this.events.publish('search-result',this.data);
	}

}
