import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';



@NgModule({
  declarations: [InvoiceListComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [InvoiceListComponent]
})
export class InvoicesModule { }
