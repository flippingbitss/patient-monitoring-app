import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SecureModule } from "@app/secure/secure.module";
import { UserService } from "@app/services/user-service";
import { NgxSmartModalModule } from "ngx-smart-modal";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core";
import { EntryModule } from "./entry/entry.module";
import { SharedModule } from "./shared";

@NgModule({
  imports: [
    BrowserModule,
    // core and shared
    CoreModule,
    SharedModule,
    SecureModule,
    EntryModule,
    AppRoutingModule,
    NgxSmartModalModule.forRoot(),
    HttpClientModule
  ],
  declarations: [AppComponent],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
