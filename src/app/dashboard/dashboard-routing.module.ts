import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MainContentComponent } from './component/main-content/main-content.component';
import { InvoiceListComponent } from '../invoices/components/invoice-list/invoice-list.component';
import { ClientListComponent } from '../clients/component/client-list/client-list.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {
        path: '',
        component: MainContentComponent
      },
      {
        path: 'invoices',
        component: InvoiceListComponent
      },
      {
        path: 'clients',
        component: ClientListComponent
      }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
