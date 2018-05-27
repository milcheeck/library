import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainViewPage } from './main-view';

@NgModule({
  declarations: [
    MainViewPage,
  ],
  imports: [
    IonicPageModule.forChild(MainViewPage),
  ],
})
export class MainViewPageModule {}
