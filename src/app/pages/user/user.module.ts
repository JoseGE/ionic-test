import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPage } from './login/login-page';
import { UserService } from 'src/app/services/user.service';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  declarations: [LoginPage],
  providers:[
    UserService
  ]
})
export class UserModule {}
