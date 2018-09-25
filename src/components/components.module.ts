import { NgModule } from '@angular/core';
import { HeaderMenuComponent } from './header-menu/header-menu';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [HeaderMenuComponent],
	imports: [
		CommonModule,
		IonicModule
	],
	exports: [HeaderMenuComponent]
})
export class ComponentsModule {}
