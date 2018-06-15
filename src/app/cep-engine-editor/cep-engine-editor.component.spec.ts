import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CepEngineEditorComponent } from './cep-engine-editor.component';

describe('CepEngineEditorComponent', () => {
  let component: CepEngineEditorComponent;
  let fixture: ComponentFixture<CepEngineEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CepEngineEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CepEngineEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
