import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomizeComponent } from './customize/customize.component';
import { ProfileComponent } from './profile/profile.component';
import {MaterialExampleModule} from 'material.module';


const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'customize',
    component: CustomizeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,MaterialExampleModule]
})
export class SettingsRoutingModule { }
