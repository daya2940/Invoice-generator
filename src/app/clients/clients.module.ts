import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './component/client-list/client-list.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClientListComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [ClientListComponent]
})
export class ClientsModule { }
