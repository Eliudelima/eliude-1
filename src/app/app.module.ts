import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
//import { ReactiveFormsModule } from '@angular/forms';

//import { AppModule } from './.app.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DiscListComponent } from './disc-list/disc-list.component';
import { DiscDetailsComponent } from './disc-details/disc-details.component';

@NgModule({
  imports: [ 
       BrowserModule,  
   //ReactiveFormsModule,  
   RouterModule.forRoot([
      { path: '', component: DiscListComponent },
      { path:'discos/:DiscId',component:DiscDetailsComponent},
      
    ])
    ], 
  declarations: [
  AppComponent,
    TopBarComponent,
    DiscListComponent,
    DiscDetailsComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
