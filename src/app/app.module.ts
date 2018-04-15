import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
 
import { AppComponent } from "./app.component";

import { CoreModule } from "./core";
import { SharedModule } from "./shared";
import { AppRoutingModule } from "./app-routing.module";
import { EntryModule } from "./entry/entry.module";

@NgModule({
  imports: [
    BrowserModule,

    // core and shared
    CoreModule,
    SharedModule,

    EntryModule,

    AppRoutingModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
