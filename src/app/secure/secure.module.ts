import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureHomeComponent } from './secure-home/secure-home.component';
import { HomeHeaderComponent } from '@app/secure/home-header/home-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SecureHomeComponent,HomeHeaderComponent]
})
export class SecureModule { }
