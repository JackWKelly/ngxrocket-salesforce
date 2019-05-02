import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { AllFaqsComponent } from './all-faqs/all-faqs.component';
import { RelevantFaqsComponent } from './relevant-faqs/relevant-faqs.component';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'faqs', component: AllFaqsComponent, data: { title: extract('FAQs') } },
    { path: 'yourfaqs', component: RelevantFaqsComponent, data: { title: extract('Your FAQs') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FaqRoutingModule { }
