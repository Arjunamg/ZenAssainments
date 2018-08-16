import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivevRegFormComponent } from './reactivev-reg-form.component';

describe('ReactivevRegFormComponent', () => {
  let component: ReactivevRegFormComponent;
  let fixture: ComponentFixture<ReactivevRegFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivevRegFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivevRegFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
