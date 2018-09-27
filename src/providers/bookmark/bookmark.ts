import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class BookmarkProvider {

	constructor(public storage: Storage) { }

	isBookmark(postId) {
		return this.storage.get(postId).then(result =>{
			return result!=null ? true:false;
		});
	}

	bookmarkPost(post,postId) {
		this.storage.set(postId,post);
	}

	removeBookmarkPost(postId) {
		return this.storage.remove(postId);
	}

	getAllBookmarks() {
		let item = [];
		var promise = new Promise((resolve, reject) => {
			this.storage.forEach((value, key, index) => {
				item.push(value);
			}).then(response => {
				resolve(item);
			});
		});
		return promise;
	}

}
