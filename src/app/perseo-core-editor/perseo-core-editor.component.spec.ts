import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerseoCoreEditorComponent } from './perseo-core-editor.component';

describe('PerseoCoreEditorComponent', () => {
  let component: PerseoCoreEditorComponent;
  let fixture: ComponentFixture<PerseoCoreEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerseoCoreEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerseoCoreEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
