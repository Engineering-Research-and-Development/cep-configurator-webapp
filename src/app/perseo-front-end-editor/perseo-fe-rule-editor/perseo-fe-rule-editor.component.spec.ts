import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerseoFeRuleEditorComponent } from './perseo-fe-rule-editor.component';

describe('PerseoFeRuleEditorComponent', () => {
  let component: PerseoFeRuleEditorComponent;
  let fixture: ComponentFixture<PerseoFeRuleEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerseoFeRuleEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerseoFeRuleEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
