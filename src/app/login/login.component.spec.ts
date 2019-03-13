import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent, User } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [LoginComponent]
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.ngOnInit()
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('Email field validity', () => {
    let email = component.form.controls['email'];
    let error = {};
    expect(email.valid).toBeFalsy();

    email.setValue('yss'); // set value
    error = email.errors || {};
    expect(error['required']).toBeFalsy(); // error is false
    expect(error['pattern']).toBeTruthy(); // error is true

  });

  it('Password field validity', () => {
    let password = component.form.controls['password'];
    let error = {};

    password.setValue('12345678');
    error = password.errors || {};

    expect(error['required']).toBeFalsy();
    expect(error['minlength']).toBeFalsy();
  });

  it('submitting a form emits a user', () => {
    expect(component.form.valid).toBeFalsy(); // false if form invalid
    component.form.controls['email'].setValue("test@test.com");
    component.form.controls['password'].setValue("12345678");
    expect(component.form.valid).toBeTruthy(); // true if form valid(email and password exist)
    let user: User;
    component.loggedIn.subscribe((value) => user = value);
    component.login();
    expect(user.email).toBe("test@test.com");
    expect(user.password).toBe("12345678");
});

});
