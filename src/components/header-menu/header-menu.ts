import { NavController } from 'ionic-angular';
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
	
	isSearchbarOpened:boolean = false;
	constructor(private api:ApiProvider, private nav:NavController) {
	}
	ngOnInit(){
		console.log(this.type);
        this.categories = this.api.getCategories();
	}
	openCatPage(category){
		console.log(category);
	}

}
