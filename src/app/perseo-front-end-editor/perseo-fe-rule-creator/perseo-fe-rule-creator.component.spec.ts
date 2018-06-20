import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerseoFeRuleCreatorComponent } from './perseo-fe-rule-creator.component';

describe('PerseoFeRuleCreatorComponent', () => {
  let component: PerseoFeRuleCreatorComponent;
  let fixture: ComponentFixture<PerseoFeRuleCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerseoFeRuleCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerseoFeRuleCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
