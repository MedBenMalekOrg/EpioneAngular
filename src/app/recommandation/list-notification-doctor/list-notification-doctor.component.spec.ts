import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNotificationDoctorComponent } from './list-notification-doctor.component';

describe('ListNotificationDoctorComponent', () => {
  let component: ListNotificationDoctorComponent;
  let fixture: ComponentFixture<ListNotificationDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNotificationDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNotificationDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
