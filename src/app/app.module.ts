import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { AppRoutingModule } from './app-routing.module';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { HeaderComponent } from './header/header.component';

import {MaterialExampleModule} from 'material.module';
import {MatListModule} from '@angular/material/list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';

import{ OverlayModule } from '@angular/cdk/overlay';
import{ CdkMenuModule } from '@angular/cdk/menu';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { KanbanComponent } from './kanban/kanban.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    StatisticsComponent,
    PagesComponent,
    MediaComponent,
    SublevelMenuComponent,
    HeaderComponent,
    KanbanComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    OverlayModule,
    CdkMenuModule,
    DragDropModule,
    MatNativeDateModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MaterialExampleModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
