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
          provide: 'hostUrl',
          useValue: "http://localhost:8091"
        }
      ]
    });
  });

  it('should be created', inject([CepEngineService],
    (service: CepEngineService) => {
      expect(service).toBeTruthy();
    }
  ));

  describe('getEngines', () => {

    it('should provide an array of engines on success', async(inject([CepEngineService],
      (service: CepEngineService) => {
        service.getEngines().subscribe({
          next: arg => {
            expect(arg).toEqual(jasmine.any(Array));
          }
        })
      }
    )));

    it('should complete', async(inject([CepEngineService],
      (service: CepEngineService) => {
        var completeFuncContainer = {
          func:() => {}
        };
        spyOn(completeFuncContainer, 'func');
        service.getEngines().subscribe({
          next: () => {},
          complete: completeFuncContainer.func
        });
        setTimeout(
          () => {
            expect(completeFuncContainer.func).toHaveBeenCalledTimes(1);
          },
          2000
        )
      }
    )));

  })

  describe('getEngine', () => {

    it('should provide an engine on success', async(inject([CepEngineService],
      (service: CepEngineService) => {
        service.getEngine('testing').subscribe({
          next: arg => {
            expect(arg).toEqual(jasmine.any(Object));
          }
        })
      }
    )));

    it('should not allow hacks', async(inject([CepEngineService],
      (service: CepEngineService) => {
        service.getEngine('testing/rules').subscribe({
          next: () => {},
          error: (err) => {
            expect(err).toBeTruthy();
          }
        })
      }
    )));

  });

});
