import { Component } from '@angular/core';
import { NavController, NavParams, ViewController,LoadingController,AlertController} from 'ionic-angular';
import { User } from '../../models/user';
import { Signup_model } from '../../models/signup_model';
import { AngularFireAuth } from 'angularfire2/auth';
import { Http } from '@angular/http';
import { ApiKeysProvider } from '../../providers/api-keys/api-keys';
import { NetworkProvider } from '../../providers/network/network';
import { Validators,FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { ActionSheetController } from 'ionic-angular/components/action-sheet/action-sheet-controller';
import { SuccessPage } from '../success/success';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signup = {} as Signup_model;

  signUpForm: FormGroup;
  submitAttempt = false;
  username_exist = false;
  email_exist = false;
  not_matched = false;
  

  constructor(
    private angularAuth: AngularFireAuth, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private loadingCtrl: LoadingController,
    private http: Http,
    private apikey: ApiKeysProvider,
    private alertCtrl: AlertController,
    private formBuilder: FormBuilder,
    private network: NetworkProvider,
    private actionSheetCtrl: ActionSheetController) {
    
      // Initialize form builder

      this.signUpForm = new FormGroup({
        lastname: new FormControl(),
        firstname: new FormControl(),
        username: new FormControl(),
        password: new FormControl(),
        password1: new FormControl(),
        email:new FormControl(),
        birth_date: new FormControl(),
        gender:new FormControl()
    });
      this.signUpForm = formBuilder.group({
        lastname: ['',Validators.required],
        firstname: ['',Validators.required],
        username: ['',Validators.required],
        password: ['',Validators.compose([Validators.minLength(8), Validators.pattern('[a-zA-Z]*'), Validators.required])],
        password1: ['',Validators.compose([Validators.minLength(8), Validators.pattern('[a-zA-Z]*'), Validators.required])],
        email: ['',Validators.required],
        birth_date: ['',Validators.required],
        gender:['',Validators.required]
    });
      
  }


 onSignUp(){
    this.submitAttempt = true;

   if(!this.signUpForm.valid){
     
   }
   else {
     
    // Confirm the password
    if(this.signUpForm.value.password === this.signUpForm.value.password1){
      this.not_matched = false;
      this.checkUsernameExist();
    }else{
      this.not_matched = true;
    }
     
   }
    
  }

  signUp(progress){
  	try{
  
     let url = this.network.api + 'signup_api.php?key='+this.apikey.signup_key;
  		/*const result = await  this.angularAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);*/
      console.log(this.signup.birth_date);


      let data = JSON.stringify({
          lastname:this.signup.lastname,
          firstname:this.signup.firstname,
          username:this.signup.username,
          password:this.signup.password,
          email:this.signup.email,
          birth_date:this.signup.birth_date,
          gender:this.signup.gender
      });


        this.http.post(url,data)
          .subscribe(data =>{

                  progress.dismiss();

                  let response = data['_body'];

                  if(response === '1'){
                    this.navCtrl.setRoot(SuccessPage);
                  }else{
                      this.alert('Something went wrong','API key is invalid! Please try again later.');
                   
                  }
                 
                }, error =>{
                  progress.dismiss();
                  console.log(error);
          });


  	}
  	catch(e){

  		console.error(e);
  	}
  	
  }

  // Check if username already exist
  checkUsernameExist(){
    
   let url = this.network.api + 'signup_api.php?key='+this.apikey.check_username_key;

   // Start the loading progess..
   let progress = this.loadingCtrl.create({content:'Please wait...'});
   progress.present(); 

    let data = JSON.stringify({
        username:this.signup.username
    });

     this.http.post(url,data)
        .subscribe(data =>{

          let response = data['_body'];
          console.log(response);
          if(response === '1'){

              progress.dismiss();
              this.username_exist = true;

          }else{

             this.username_exist = false;
             this.checkEmailExist(progress);
            
          }
        

        }, error =>{
          progress.dismiss();
          console.log(error);
      });

  }

  // Check if email already exist
  checkEmailExist(progress){
  
    this.http.get(this.network.api + 'signup_api.php?key=' + this.apikey.check_email_key + '&email='+this.signup.email).map(res => res.json())
    .subscribe(data => {

      
        if(data == true){

          this.email_exist = true;
          progress.dismiss();
         }else{
            
          
           this.email_exist = false;
           this.signUp(progress);

         }
        

     },error =>{

      progress.dismiss();
      console.log(error);
     });

  }
  close(){
      this.viewCtrl.dismiss();
  }

  alert(title, subtitle) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['Ok']
    });

  alert.present();
 }


 selectGender() {
  let actionSheet = this.actionSheetCtrl.create({
    title: '',
    buttons: [
      {
        text: 'Male',
        role: 'male',
        handler: () => {
          this.signup.gender = 'Male';
        }
      },{
        text: 'Female',
        role: 'female',
        handler: () => {
          this.signup.gender = 'Female';
        }
      },{
        text: 'Other',
        role: 'other',
        handler: () => {
          this.signup.gender = 'Other';
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          
        }
      }
    ]
  });
  actionSheet.present();
}

}
