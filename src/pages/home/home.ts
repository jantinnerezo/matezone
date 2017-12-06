import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ToastController,ActionSheetController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';


declare var google:any;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapRef: ElementRef;


  constructor(private angularAuth: AngularFireAuth,public navCtrl: NavController,private geolocation: Geolocation, private toast: ToastController,private actionSheetCtrl: ActionSheetController) {

  }

  ionViewDidLoad(){

  	this.angularAuth.authState.subscribe(data => {

  		let email = data.email;
  		this.toast.create({
  			message: 'Logged in',
  			duration:3000

  		}).present();
  	});
  	this.showMap();

  }

  showMap(){

  
  	const subscription = this.geolocation.watchPosition()
                              .subscribe(position => {

                              		// User location 
	  	const location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);


	  	// Map options
	  	const options = {

	  		center:location,
	  		zoom:15,
	  		streetViewControl: false,
	  		mapTypeId:'roadmap'
	  	}

	  	const map = new google.maps.Map(this.mapRef.nativeElement,options);

	  	this.addMarker(location,map);
  			//console.log(position.coords.longitude + ' ' + position.coords.latitude);
	}); 	

  }

  addMarker(position, map){
  	return new google.maps.Marker({
  		position,
  		map,
  	});
  }


  options() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '',
      buttons: [
        {
          text: 'Logout',
          role: 'logout',
          handler: () => {
            this.navCtrl.setRoot(LoginPage);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }


}
