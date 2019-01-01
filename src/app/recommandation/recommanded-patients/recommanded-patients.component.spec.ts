import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommandedPatientsComponent } from './recommanded-patients.component';

describe('RecommandedPatientsComponent', () => {
  let component: RecommandedPatientsComponent;
  let fixture: ComponentFixture<RecommandedPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommandedPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommandedPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
