import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule} from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MainContentComponent } from './component/main-content/main-content.component';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { MaterialModule } from '../shared/material.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
  DashboardComponent,
  MainContentComponent,
  SideNavComponent,
  ToolbarComponent
],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    RouterModule
  ]
})
export class DashboardModule { }
