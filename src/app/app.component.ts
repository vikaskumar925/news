import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HomePage } from '../pages/home/home';
import { PostDetailsPage } from '../pages/post-details/post-details';
@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild('myNav') nav: NavController
	rootPage = HomePage;
	pages: Array<{ title: string, component: any }>;

	menuItems:Array<any>

	constructor(
		public platform: Platform,
		public menu: MenuController,
		public statusBar: StatusBar,
		public splashScreen: SplashScreen,
		private iab: InAppBrowser
	) {
		this.initializeApp();

		// set our app's pages
		this.pages = [
			{ title: 'Home', component: HomePage },
		];
		this.menuItems =[
			{ itemName:'Saved Posts', type:'page',icon:'bookmark',},
			{ itemName:'Home', type:'page',icon:'home',component:HomePage},
			{ itemName:'Video', type:'link',icon:'logo-youtube',url:'https://www.youtube.com/user/bhadas4media'},
			{ itemName:'Bhadas online blog', type:'link',icon:'ios-globe',url:'https://www.bhadasonline.blogspot.in'},
			{ itemName:'भड़ास ब्लाग', type:'link',icon:'logo-rss',url:'https://www.bhadas.blogspot.in'},
			{ itemName:'फेसबुक', type:'link',icon:'logo-facebook',url:'https://www.facebook.com/bhadasmedia'},
			{ itemName:'ट्विटर', type:'link',icon:'logo-twitter',url:'https://twitter.com/bhadasmedia'},
			{ itemName:'सपोर्ट भड़ास', type:'page',icon:'ios-link',component:PostDetailsPage},
			{ itemName:'डोनेट भड़ास', type:'page',icon:'ios-link',component:PostDetailsPage},
			{ itemName:'शिकायत', type:'post',icon:'ios-mail',component:PostDetailsPage},
			{ itemName:'वैधानिक', type:'post',icon:'ios-link',component:PostDetailsPage},
			{ itemName:'संपर्क', type:'post',icon:'ios-call',component:PostDetailsPage},
			{ itemName:'हमारे बारे में', type:'post',icon:'ios-link',component:PostDetailsPage},
			{ itemName:'ओल्ड भड़ास4मीडिया', type:'link',icon:'ios-link',url:'https://www.bhadas4media.com/old/'},
			{ itemName:'ओल्ड1 भड़ास4मीडिया', type:'link',icon:'ios-link',url:'https://www.bhadas4media.com/old1/'},
			{ itemName:'हिंदी फॉन्ट कनवर्टर', type:'post',icon:'ios-link',component:PostDetailsPage},
			{ itemName:'Privacy Policy', type:'post',icon:'ios-link',component:PostDetailsPage},
		];
	}
	initializeApp() {
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}
	openPage(item) {
		// close the menu when clicking a link from the menu
		this.menu.close();
		if(item.type=='page'){
			this.nav.setRoot(item.component);
		} else if(item.type=='link'){
			const browser = this.iab.create(item.url);
			browser.close();

		}
		
	}
}

