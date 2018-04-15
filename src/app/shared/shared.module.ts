import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedRoutingModule } from '@app/shared/shared-routing.module';


@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    HeaderComponent
  ],
  declarations: [HeaderComponent]
})
export class SharedModule { }
