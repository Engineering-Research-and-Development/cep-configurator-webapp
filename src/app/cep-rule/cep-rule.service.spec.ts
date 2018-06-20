import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CepRuleService } from './cep-rule.service';
import { Observable } from 'rxjs';

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

    it('should work when target engine exists', async(inject([CepRuleService],
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

  describe('createRule', () => {

    it('should fail for non-existant engine', async(inject([CepRuleService],
      (service: CepRuleService) => {
        service.createRule("",{}).subscribe(
          () => {},
          (error) => {
            expect(error).toBeTruthy();
          }
        );
      }
    )));

    it('should work for correct engine and rule', async(inject([CepRuleService],
      (service: CepRuleService) => {
        service.createRule("perseo-core", {
          statement: "select * from ev=iotEvent"
        }).subscribe(
          () => {
            service.getRules("perseo-core").subscribe(
              (data) => {
                var arrayData = <Array<any>>data;
                expect(arrayData.length).toBeGreaterThan(0);
              }
            )
          },
          (error) => {
            expect(error).toBeFalsy();
          }
        );
      }
    )))

  });

  describe('deleteRule', () => {

    it('should work', async(inject([CepRuleService],
      (service: CepRuleService) => {
        service.createRule("perseo-core", {
          statement: "select * from ev=iotEvent"
        }).subscribe(
          () => {
            service.getRules("perseo-core").subscribe(
              (data) => {
                var arrayData = <Array<any>>data;
                var observables = []
                expect(arrayData.length).toBeGreaterThan(0);
                arrayData.forEach((rule) => {
                  observables.push(service.deleteRule("perseo-core", rule.ruleId))
                })
                observables.push(function () {
                  return arguments;
                })
                Observable.zip.apply(null, observables).subscribe(() => {
                  service.getRules("perseo-core").subscribe(
                    (data) => {
                      var arrayData = <Array<any>>data;
                      expect(arrayData.length).toBe(0);
                    }
                  )
                });
              }
            );
          },
          (error) => {
            expect(error).toBeFalsy();
          }
        )
      }
    )));

  });

});
