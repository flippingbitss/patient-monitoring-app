import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
 
import { AppComponent } from "./app.component";

import { CoreModule } from "./core";
import { SharedModule } from "./shared";
import { AppRoutingModule } from "./app-routing.module";
import { EntryModule } from "./entry/entry.module";
import { SecureModule } from "@app/secure/secure.module";
import { ModalDialogModule } from 'ngx-modal-dialog';
import { NgxSmartModalModule } from "ngx-smart-modal";
import { UserService } from "@app/entry/user-service";

@NgModule({
  imports: [
    BrowserModule,
    // core and shared
    CoreModule,
    SharedModule,
    SecureModule,
    EntryModule,
    AppRoutingModule,
    NgxSmartModalModule.forRoot()
  ],
  declarations: [AppComponent],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
