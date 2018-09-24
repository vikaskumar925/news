import { NgModule } from '@angular/core';
import { HeaderMenuComponent } from './header-menu/header-menu';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { PostsComponent } from './posts/posts';
@NgModule({
	declarations: [HeaderMenuComponent,
    PostsComponent],
	imports: [
		CommonModule,
		IonicModule
	],
	exports: [HeaderMenuComponent,
    PostsComponent]
})
export class ComponentsModule {}
