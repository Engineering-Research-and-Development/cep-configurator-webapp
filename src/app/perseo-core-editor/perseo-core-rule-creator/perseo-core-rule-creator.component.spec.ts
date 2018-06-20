import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerseoCoreRuleCreatorComponent } from './perseo-core-rule-creator.component';

describe('PerseoCoreRuleCreatorComponent', () => {
  let component: PerseoCoreRuleCreatorComponent;
  let fixture: ComponentFixture<PerseoCoreRuleCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerseoCoreRuleCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerseoCoreRuleCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
