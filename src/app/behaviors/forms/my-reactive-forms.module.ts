import { NgModule } from '@angular/core';
import { MyReactiveFormsComponent } from './my-reactive-forms.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [ReactiveFormsModule],
  exports: [MyReactiveFormsComponent],
  declarations: [MyReactiveFormsComponent],
  providers: [],
})
export class MyReactiveFormsModule {}
