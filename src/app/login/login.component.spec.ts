import { inject } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../Service/auth.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authser : AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent,RouterTestingModule],
    })
    .compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authser = TestBed.inject(AuthService);
  });

  it('should create Login', () => {
    expect(component).toBeTruthy();
  });

  it('should login successfully', () => {
      expect(component.login('rania','123')).toBeTruthy();
      expect(component.login('','123')).toEqual('');
  });
});