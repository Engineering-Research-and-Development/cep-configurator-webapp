import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerseoFrontEndEditorComponent } from './perseo-front-end-editor.component';

describe('PerseoFrontEndEditorComponent', () => {
  let component: PerseoFrontEndEditorComponent;
  let fixture: ComponentFixture<PerseoFrontEndEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerseoFrontEndEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerseoFrontEndEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
