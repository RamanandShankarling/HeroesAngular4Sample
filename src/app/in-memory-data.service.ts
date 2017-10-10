import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Spiderman' },
      { id: 11, name: 'Superman' },
      { id: 12, name: 'Ironman' },
      { id: 13, name: 'Hulk' },
      { id: 14, name: 'Hawkeye' },
      { id: 15, name: 'Thor' },
      { id: 16, name: 'Optimus Prime' },
      { id: 17, name: 'Wasp' },
      { id: 18, name: 'Black Widow' },
      { id: 19, name: 'Batman' },
      { id: 20, name: 'Captain America' }
    ];
    return {heroes};
  }
}
