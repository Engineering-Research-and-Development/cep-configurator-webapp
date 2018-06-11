import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { CepEngineService } from './cepengine.service';

describe('CepEngineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        CepEngineService,
        {
          provide: String,
          useValue: 'http://localhost:8091'
        }
      ]
    });
  });

  it('should be created', inject([CepEngineService],
    (service: CepEngineService) => {
      expect(service).toBeTruthy();
    }
  ));

  describe ('getEngines', () => {

    it('should provide an array of engines on success', async(inject([CepEngineService],
      (service: CepEngineService) => {
        service.getEngines().subscribe({
          next: arg => {
            expect(arg).toEqual(jasmine.any(Array));
          }
        })
      }
    )));
  })

});
