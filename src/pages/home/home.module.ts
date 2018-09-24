import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from './../../components/header-menu/header-menu';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';


@NgModule({
    declarations:[
        HomePage,
        HeaderMenuComponent
    ],
    imports:[
        CommonModule,
        IonicPageModule.forChild(HomePage),     
    ],
    entryComponents: [
        HomePage,
    ],
    exports:[
        HomePage,
    ],
     
})
export class HomePageModule {}