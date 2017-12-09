import { Component } from '@angular/core';
import { NavController, NavParams,ModalController,AlertController,ActionSheetController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { SuccessPage } from '../success/success';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(
	private angularAuth: AngularFireAuth,
	public navCtrl: NavController, 
	public navParams: NavParams,
	private modalCtrl: ModalController,
	private alertCtrl: AlertController,
	private actionSheetCtrl: ActionSheetController) {
  }



  async login(user: User){

  	/*	try{
  		const result = this.angularAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  		if(result){
  			this.navCtrl.setRoot(HomePage);
  		}
  	}
  	catch(e){
  		console.error(e);
  	}*/
  
  }


  signup(){

	/*const modal = this.modalCtrl.create(SignupPage);
	  modal.present();*/
	  this.navCtrl.push(SignupPage);
	   
	}
	



}
