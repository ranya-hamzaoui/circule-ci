import { TestBed } from '@angular/core/testing';
import { SharedService } from './shared.service';
import { TraitementService } from './traitement.service';

describe('TraitementService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should mulitply numbers', () => {
    const sharedser = new SharedService();
    const result = new TraitementService(sharedser).multipleNum(8,2)
    expect(result).toBe(16);
  });

  it('should call shared Service', () => {
    
    const service = new SharedService();
    spyOn(service,"sharedFunc");
    const result = new TraitementService(service).multipleNum(3,5);
    expect(service.sharedFunc).toHaveBeenCalled();
  });

});
