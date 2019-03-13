import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubComponent } from './sub.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('SubComponent', () => {
  let component: SubComponent;
  let fixture: ComponentFixture<SubComponent>; // Instance of calss

  beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule,ReactiveFormsModule],
        declarations: [ SubComponent ]
      })
      .compileComponents();
    }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Incrementing by 1' , () => {
    const oldvalue = component.count;
    component.add();
    const newvalue = component.count;
    expect(newvalue).toBe(oldvalue + 1);
  });


  it('Decrement by 1' , () => {
    const oldvalue = component.count;
    component.sub();
    const newvalue = component.count;
    expect(newvalue).toBe(oldvalue - 1);
  });

  it('Should include name along with message', () => {
    component.submit('geethu');
    expect(component.message).toContain('geethu');
  });

});
