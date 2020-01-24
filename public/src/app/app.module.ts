
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { InfoComponent } from './info/info.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import {FormsModule} from '@angular/forms';
import { CreateComponent } from './create/create.component'
import { UpdateComponent } from './update/update.component';
import { MaininfoComponent } from './maininfo/maininfo.component';
import { PetinfoComponent } from './petinfo/petinfo.component';
// import { QuoteformComponent } from './quoteform/quoteform.component';
// import { QuotedisplayComponent } from './quotedisplay/quotedisplay.component';
// import { QuotebaseComponent } from './quotebase/quotebase.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    // InfoComponent,
    UpdateComponent,
    MaininfoComponent,
    PetinfoComponent,
    // QuoteformComponent,
    // QuotedisplayComponent,
    // QuotebaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
