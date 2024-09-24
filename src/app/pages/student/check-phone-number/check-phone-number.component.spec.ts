import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPhoneNumberComponent } from './check-phone-number.component';

describe('CheckPhoneNumberComponent', () => {
  let component: CheckPhoneNumberComponent;
  let fixture: ComponentFixture<CheckPhoneNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckPhoneNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckPhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
