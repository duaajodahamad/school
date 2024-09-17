import { TestBed } from '@angular/core/testing';

import { TeacherDataServiceService } from './teacher-data.service';

describe('TeacherDataServiceService', () => {
  let service: TeacherDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
