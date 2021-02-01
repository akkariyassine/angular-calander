import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatepickerComponent } from './components/datepicker/datepicker.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [DatepickerComponent],
  declarations: [DatepickerComponent],
})
export class SharedModule {}
