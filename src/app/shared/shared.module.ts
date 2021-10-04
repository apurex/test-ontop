import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    HeaderComponent,
    CustomTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatMenuModule,
    MatDividerModule,
    MatPaginatorModule
  ],
  exports: [
    HeaderComponent,
    CustomTableComponent
  ]
})
export class SharedModule { }
