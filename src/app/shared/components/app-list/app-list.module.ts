import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppListComponent } from './app-list.component';
import { AppItemComponent } from './app-item/app-item.component';

@NgModule({
  declarations: [
    AppListComponent,
    AppItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppListComponent,
    AppItemComponent
  ],
})
export class AppListModule { }
