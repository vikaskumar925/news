import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { HttpModule } from '@angular/http';

@NgModule({
    declarations:[
        HomePage,
    ],
    imports:[
        IonicPageModule.forChild(HomePage),
       HttpModule
    ],
    exports:[
        HomePage,
    ],
     
})
export class HomePageModule {}