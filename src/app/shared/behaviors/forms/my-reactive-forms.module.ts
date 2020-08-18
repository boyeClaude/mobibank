import { NgModule } from '@angular/core';
import { MyReactiveFormsComponent } from './my-reactive-forms.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  exports: [MyReactiveFormsComponent],
  declarations: [MyReactiveFormsComponent],
  providers: [],
})
export class MyReactiveFormsModule {}
