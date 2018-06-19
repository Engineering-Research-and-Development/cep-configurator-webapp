import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerseoCoreRuleEditorComponent } from './perseo-core-rule-editor.component';

describe('PerseoCoreRuleEditorComponent', () => {
  let component: PerseoCoreRuleEditorComponent;
  let fixture: ComponentFixture<PerseoCoreRuleEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerseoCoreRuleEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerseoCoreRuleEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
