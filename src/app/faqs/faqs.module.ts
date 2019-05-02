import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllFaqsComponent } from './all-faqs/all-faqs.component';
import { RelevantFaqsComponent } from './relevant-faqs/relevant-faqs.component';

import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material.module';
import { FaqRoutingModule } from './faqs-routing.module';
import { FaqDataService } from './faq-data.service';

@NgModule({
  declarations: [
    AllFaqsComponent,
    RelevantFaqsComponent],
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    FaqRoutingModule
  ],
  providers: [
    FaqDataService
  ]
})
export class FaqsModule { }
