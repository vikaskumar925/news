import { NavController, Events } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
	selector: 'header-menu',
	templateUrl: 'header-menu.html',
	animations:[
		trigger('searchState',[
			state('*',style({
				'border-bottom':'1px solid white',
			})),
			state('void',style({
				'border-bottom':'none',
			})),
			transition( 'void <=> *',animate(500)),
		])
	],
})
export class HeaderMenuComponent implements OnInit {
	@Input() type:string;
	categories:any =[];
	offset: number = 0;
	data:any=[];
	title:string = 'Home';
	searchbarState:string = 'invisible';

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
	searchbarOpen(){
		this.searchbarState = 'visible';
	}
	searchbarClose(){
		this.searchbarState = 'invisible';
	}

}
