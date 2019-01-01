import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecommandationComponent } from './add-recommandation.component';

describe('AddRecommandationComponent', () => {
  let component: AddRecommandationComponent;
  let fixture: ComponentFixture<AddRecommandationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecommandationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecommandationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
