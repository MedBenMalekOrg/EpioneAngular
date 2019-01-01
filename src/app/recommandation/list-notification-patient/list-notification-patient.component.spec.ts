import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNotificationPatientComponent } from './list-notification-patient.component';

describe('ListNotificationPatientComponent', () => {
  let component: ListNotificationPatientComponent;
  let fixture: ComponentFixture<ListNotificationPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNotificationPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNotificationPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
