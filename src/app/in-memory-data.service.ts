import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const Rules = [
      { id: 'klopa', content: 'vegeta' },
      { id: 'pice', content: 'kapricoze' },
      { id: 'mekusac', content: 'crvici' },
      { id: 'pivo', content: 'save water, drink beer' }
    ];

    return { Rules };
  }
}
