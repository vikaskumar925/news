import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavedPostsPage } from './saved-posts';

@NgModule({
  declarations: [
    SavedPostsPage,
  ],
  imports: [
    IonicPageModule.forChild(SavedPostsPage),
  ],
})
export class SavedPostsPageModule {}
