import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMeInfoComponent } from './send-me-info.component';

describe('SendMeInfoComponent', () => {
  let component: SendMeInfoComponent;
  let fixture: ComponentFixture<SendMeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendMeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
