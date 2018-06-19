import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerseoFeRuleListComponent } from './perseo-fe-rule-list.component';

describe('PerseoFeRuleListComponent', () => {
  let component: PerseoFeRuleListComponent;
  let fixture: ComponentFixture<PerseoFeRuleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerseoFeRuleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerseoFeRuleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
