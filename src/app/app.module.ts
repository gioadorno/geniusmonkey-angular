import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ImageComponent } from './components/image/image.component';
import { FormComponent } from './components/form/form.component';
import { MainComponent } from './components/main/main.component';
import { OptionsComponent } from './components/options/options.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageComponent,
    FormComponent,
    MainComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
