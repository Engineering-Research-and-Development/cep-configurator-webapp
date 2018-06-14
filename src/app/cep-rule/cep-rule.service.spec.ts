import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CepRuleService } from './cep-rule.service';

describe('CepRuleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        CepRuleService,
        {
          provide: 'CepMiddlewareUrl',
          useValue: "http://localhost:8091"
        }
      ]
    });
  });

  it('should be created', inject([CepRuleService], (service: CepRuleService) => {
    expect(service).toBeTruthy();
  }));

  describe('getRules', () => {

    it('should work when target engine exists', async( inject([CepRuleService],
      (service: CepRuleService) => {
        service.getRules('perseo-core').subscribe( (data) => {
          expect(data).toEqual(jasmine.any(Array));
        })
      }
    )));

    it('should fail when the provided engine does not exist', async(
      inject(
        [CepRuleService],
        (service: CepRuleService) => {
          service.getRules('').subscribe(
            () => {},
            (error) => {
              expect(error).toBeTruthy();
            }
          )
        }
      )
    ));

  });

});
