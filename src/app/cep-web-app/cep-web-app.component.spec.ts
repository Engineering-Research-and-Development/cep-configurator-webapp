import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CepWebAppComponent } from './cep-web-app.component';

describe('CepWebAppComponent', () => {
  let component: CepWebAppComponent;
  let fixture: ComponentFixture<CepWebAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CepWebAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CepWebAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
