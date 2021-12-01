import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';


import { ValidateService } from './services/validate.service';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './services/auth.service';
import { JwtModule} from '@auth0/angular-jwt';
import { AuthGuard } from './guards/auth.guard';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import{NgxQRCodeModule}from'@techiediaries/ngx-qrcode';
import { QrgenComponent } from './components/qrgen/qrgen.component';
import { QrscanComponent } from './components/qrscan/qrscan.component';
import { ConvertComponent } from './components/convert/convert.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    ListComponent,
    CardComponent,
    QrgenComponent,
    QrscanComponent,
    ConvertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule,
    HttpClientModule,
    NgxQRCodeModule,
    JwtModule.forRoot({
    config:{
      tokenGetter: () =>{
        return localStorage.getItem('authToken');
      },
    },
    })
  ],
  providers: [ValidateService,FlashMessagesService, AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
