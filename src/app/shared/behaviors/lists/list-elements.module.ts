import { NgModule } from '@angular/core';
import { ListElementsComponent } from './list-elements.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [NgModule, CommonModule],
  exports: [ListElementsComponent],
  declarations: [ListElementsComponent],
  providers: [],
})
export class ListElementsModule {}
