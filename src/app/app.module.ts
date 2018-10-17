import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SingUpPage } from '../pages/sing-up/sing-up';
import { RegisterUserPage } from '../pages/register-user/register-user';

import { SimplenavComponent } from '../components/simplenav/simplenav';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SingUpPage,
    RegisterUserPage,
    SimplenavComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SingUpPage,
    RegisterUserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
