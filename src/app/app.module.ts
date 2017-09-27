import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {ProductsModule} from './products/products/products.module';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProductsModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'products',pathMatch:'full'},
      {path:'**',redirectTo:'products'}
    ],{useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
