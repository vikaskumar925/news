import { SavedPostsPage } from './../pages/saved-posts/saved-posts';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HomePage } from '../pages/home/home';
import { PostDetailsPage } from '../pages/post-details/post-details';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ApiProvider } from '../providers/api/api';
import { ComponentsModule } from '../components/components.module';
import { IonicStorageModule } from '@ionic/storage';
import { BookmarkProvider } from '../providers/bookmark/bookmark';
import { SocialSharing } from '@ionic-native/social-sharing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		PostDetailsPage,
		SavedPostsPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		HttpClientModule,
		ComponentsModule,
		IonicStorageModule.forRoot(),
		BrowserAnimationsModule,
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		PostDetailsPage,
		SavedPostsPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		ApiProvider,
		InAppBrowser,
		BookmarkProvider,
		SocialSharing,
		
	]
})
export class AppModule {
}
