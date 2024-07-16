import { fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './data.service';
import tasks from '../mockData/tasks';

describe('DataService', () => {
  let service: DataService;
  let controllerService : HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DataService);
    controllerService = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('should test get Tasks !!!!! ', (done: DoneFn) => {

    service.getAlltasks().subscribe((res:any) => 
    {
      expect(res).toEqual(tasks);
      done()
    
    }
    );

    // const req = controllerService.expectOne({
    //   method: 'GET',
    //   url: service.urlTask,
    // });
    
    //  req.flush(tasks);

  });

});
