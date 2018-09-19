import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { PostDetailsPage } from './post-details';

@NgModule({
    declarations:[
        PostDetailsPage
    ],
    imports:[
        IonicPageModule.forChild(PostDetailsPage),
    ],
    exports:[
        PostDetailsPage
    ]
})
export class PostDetailsPageModule {}