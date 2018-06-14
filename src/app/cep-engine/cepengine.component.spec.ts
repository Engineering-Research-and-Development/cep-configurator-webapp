import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { CepEngineComponent } from './cepengine.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CepEngineService } from './cepengine.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CepEngineComponent', () => {
  let component: CepEngineComponent;
  let fixture: ComponentFixture<CepEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CepEngineComponent ],
      imports: [
        CommonModule,
        MatSelectModule,
        BrowserModule,
        FormsModule,
        MatFormFieldModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      providers: [
        CepEngineService,
        {
          provide: 'hostUrl',
          useValue: "http://localhost:8091"
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CepEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
