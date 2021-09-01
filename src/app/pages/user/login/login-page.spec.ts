import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login-page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot(),HttpClientModule, ReactiveFormsModule]
    }).compileComponents();
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should form be invalid when click button and form is empty',()=>{
  
    const validFields = component.loginForm.valid;
    fixture.detectChanges();
    let buttonElement = fixture.debugElement.query(By.css('#send-button'));
  
    buttonElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(validFields).toBe(false);
   
  })
  it('should form be valid when click button and form not is empty',()=>{
    component.loginForm.controls.userId.setValue('user');
    component.loginForm.controls.password.setValue('pass');
    const validFields = component.loginForm.valid;
    fixture.detectChanges();
    let buttonElement = fixture.debugElement.query(By.css('#send-button'));
  
    buttonElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(validFields).toBe(true);
    
  })
});
