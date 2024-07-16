import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Product } from '../../interfaces/Product';
import { mockproduct } from '../../mockData/product';
import { DataService } from '../../Service/data.service';

import { ContentComponent } from './content.component';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;
  let el : DebugElement;
  let dataSer : DataService
  let controllerService : HttpTestingController

  beforeEach(() => {
     TestBed.configureTestingModule({
      imports: [ContentComponent,HttpClientModule,HttpClientTestingModule]
    }).compileComponents();
    
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
    dataSer = TestBed.inject(DataService);
    controllerService = TestBed.inject(HttpTestingController)
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have specific Content', () => {
    let pEl = el.queryAll(By.css('h1'));
    expect(pEl[0].nativeElement.textContent).toContain('Space The Final Frontier')

    let pButton = el.queryAll(By.css('button'));
    expect(pButton[0].nativeElement.disabled).toBeTrue()

  });

  xit('should get a content by Id one', (done : DoneFn) => {
    dataSer.getOneProducts(2).subscribe((product: Product)=> {
      expect(product.id).toEqual(2);
      done();
    })
  });

  it('should get a content as expected mockdata Product', () => {
      dataSer.getOneProducts(1).subscribe((product: Product)=> {
      expect(product).toEqual(mockproduct);
    })
    const req = controllerService.expectOne({
      method: 'GET',
      url: 'https://fakestoreapi.com/products/1',
    });
     req.flush(mockproduct);
  });
});
