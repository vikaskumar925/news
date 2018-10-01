import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {
	baseUrl = "https://www.bhadas4media.com/wp-json/wp/v2/";
	data:any =[];
	constructor(public http: HttpClient) {}

	getCategories() {
		this.http.get<any>(this.baseUrl+'categories?per_page=30')
			.map(response =>{
				for (let item of response){
					this.data.push(item);
				}
			})
			.subscribe();
		return this.data;
	}
	getPosts(data:Array<any>, offset = 0) {
		this.http.get<[any]>(this.baseUrl+'posts?offset='+offset)
			.map(response =>{
				for (let item of response){
					console.log(this.getCategoryDetail(item.categories[0]));
					//data.push(item);
					//console.log(item);
				}
			})
			.subscribe();
		return data;
		
	}
	getCategoryPosts(categoryId) {
		this.http.get<any>(this.baseUrl+'posts?categories='+categoryId)
			.subscribe(response=>{
				this.data = response;
			});
		return this.data;
	}
	getSearchPosts(data,searchTerm,offset=0) {
		this.http.get<any>(this.baseUrl+'posts?search='+searchTerm+'&offset='+offset)
			.map(response =>{
				for (let item of response){
					data.push(item);
				}
			})
			.subscribe();
		return data;
	}
	getPostDetail(id){
		/* this.http.get<any>(this.baseUrl+'posts/'+id)
			.map()
			.subscribe();
			return this.data; */
	}

	getCategoryDetail(id){
console.log(this.baseUrl+'categories/'+id);
	let cat:object;
			this.http.get<any>(this.baseUrl+'categories/'+id)
			 .map(response =>{
			 cat = response;
			 console.log(response)
			 })
			 .subscribe();
			 return this.data;
			
	}

}
