import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerseoCoreRuleListComponent } from './perseo-core-rule-list.component';

describe('PerseoCoreRuleListComponent', () => {
  let component: PerseoCoreRuleListComponent;
  let fixture: ComponentFixture<PerseoCoreRuleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerseoCoreRuleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerseoCoreRuleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
