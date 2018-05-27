import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from './../register/register';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainViewPage } from '../main-view/main-view';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  loginForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    this.loginForm = fb.group({
      loginFormUsername: ['', Validators.required],
      loginFormPassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  redirectToRegisterPage() {
    this.navCtrl.push(RegisterPage);
  }

  onSubmit(event: any) {

    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      alert(('Zalogowano poprawnie. login: ' + this.loginForm.value.loginFormUsername + ', password: ' + this.loginForm.value.loginFormPassword))
      this.loginForm.controls['loginFormUsername'].setValue('');
      this.loginForm.controls['loginFormPassword'].setValue('');
      this.navCtrl.push(MainViewPage);
    } else {
      alert('Nie można zalogować. Błędnie wypełniony formularz');
    }
  }


}
