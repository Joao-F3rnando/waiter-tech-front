import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginRestaurantComponent } from './components/login-restaurant/login-restaurant.component';
import { SignupRestaurantComponent } from './components/signup-restaurant/signup-restaurant.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { OptionComponent } from './components/option/option.component';
import { DishesComponent } from './components/dishes/dishes.component';
import { OptionEditComponent } from './components/option-edit/option-edit.component';
import { HomeRestauranteComponent } from './components/home-restaurante/home-restaurante.component';
import { LocalizacaoComponent } from './components/localizacao/localizacao.component';
import { ProcurarComponent } from './components/procurar/procurar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginRestaurantComponent,
    SignupRestaurantComponent,
    ForgetPasswordComponent,
    AddItemComponent,
    OptionComponent,
    DishesComponent,
    OptionEditComponent,
    HomeRestauranteComponent,
    LocalizacaoComponent,
    ProcurarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
