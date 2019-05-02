import { Component, OnInit } from '@angular/core';
import { FaqDataService } from '../faq-data.service';
import { Record, Data, Faq } from '@app/models/faqQuery';
import { Credentials, CredentialsService } from '@app/core/authentication/credentials.service';

@Component({
  selector: 'app-relevant-faqs',
  templateUrl: './relevant-faqs.component.html',
  styleUrls: ['./relevant-faqs.component.scss']
})
export class RelevantFaqsComponent implements OnInit {

  constructor(
    private faqDataService: FaqDataService,
    private credentialsService: CredentialsService
    ) { }

  faqs: Faq[]

  ngOnInit() {
    //get articls for login name
    this.faqDataService.getFaqs(this.credentialsService.credentials.username)
    .subscribe(sfData => {
      let faqs: Faq[] = [];
      for (let i: number = 0; i < sfData.records.length; i++) {
        let tempFaq: Faq = new Faq;
        //sort out junk data from query
        tempFaq.name = sfData.records[i].product__r.faq__r.Name;
        tempFaq.content = sfData.records[i].product__r.faq__r.Content__c;
        faqs.push(tempFaq);
      };
      this.faqs = faqs;
      console.log(this.faqs);
    });
  }

}
