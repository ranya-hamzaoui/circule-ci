import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from '../layouts/footer/footer.component';
import { NavbarComponent } from '../layouts/navbar/navbar.component';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent,NavbarComponent,FooterComponent,RouterTestingModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

   it('should create Home', () => {
    expect(component).toBeTruthy();
  });

   it('should have app-footer', () => {
    const footerComponent = fixture.debugElement.query(By.directive(FooterComponent));
    expect(footerComponent).toBeTruthy();
   });

   it('should have app-navbar', () => {
    const navComponent = fixture.debugElement.query(By.directive(NavbarComponent));
    expect(navComponent).toBeTruthy();
   });

});
