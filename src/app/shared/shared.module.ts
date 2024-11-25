import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { ToobalNavigationComponent } from './components/toobal-navigation/toobal-navigation.component';

@NgModule({
  declarations: [
    ToobalNavigationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    // PrimeNG
    ToolbarModule,
    CardModule,
    ButtonModule,
  ],
  providers: [
    DialogService,
    CurrencyPipe
  ],
  exports: [ToobalNavigationComponent]
})
export class SharedModule { }
