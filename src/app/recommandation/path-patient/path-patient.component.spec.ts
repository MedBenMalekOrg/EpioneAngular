import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathPatientComponent } from './path-patient.component';

describe('PathPatientComponent', () => {
  let component: PathPatientComponent;
  let fixture: ComponentFixture<PathPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
