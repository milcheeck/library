import { Component, HostListener, Renderer2 } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/donts/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {


  registerForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private renderer: Renderer2) {
    this.registerForm = fb.group({
      registerFormUsername: ['', Validators.required],
      registerFormPassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      registerFormPasswordRepeat: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      registerFormEmail: ['', Validators.compose([Validators.required, Validators.email])]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  redirectToRegisterPage() {
    this.navCtrl.push(RegisterPage);
  }

  onSubmit(event: any) {

    if (this.registerForm.valid && this.registerForm.controls['registerFormPassword'].value === this.registerForm.controls['registerFormPasswordRepeat'].value) {
     alert('super');
    } else {
      alert('Nie można zalogować. Błędnie wypełniony formularz');
    }
  }

  checkIfRegisterButtonDisabled() {
    if (this.registerForm.valid && this.registerForm.controls['registerFormPassword'].value === this.registerForm.controls['registerFormPasswordRepeat'].value) {
      return false;
    } else {
      return true;
    }
  }

  checkIfPasswordIsEqual() {
    if (this.registerForm.controls['registerFormPassword'].value !== '' && this.registerForm.controls['registerFormPasswordRepeat'].value !== '') {
      if (this.registerForm.controls['registerFormPassword'].value === this.registerForm.controls['registerFormPasswordRepeat'].value) {
        return true;
      } else {
        return false;
      }
    }
  }

  redirectToLoginPage() {
    this.navCtrl.push(LoginPage);
  }

}
