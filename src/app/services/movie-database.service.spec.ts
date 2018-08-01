import { TestBed, inject } from '@angular/core/testing';

import { MovieDatabaseService } from './movie-database.service';

describe('MovieDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieDatabaseService]
    });
  });

  it('should be created', inject([MovieDatabaseService], (service: MovieDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
