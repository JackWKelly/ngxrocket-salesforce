import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelevantFaqsComponent } from './relevant-faqs.component';

describe('RelevantFaqsComponent', () => {
  let component: RelevantFaqsComponent;
  let fixture: ComponentFixture<RelevantFaqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelevantFaqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelevantFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
