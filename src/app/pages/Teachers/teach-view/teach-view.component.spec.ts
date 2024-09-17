import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachViewComponent } from './teach-view.component';

describe('TeachViewComponent', () => {
  let component: TeachViewComponent;
  let fixture: ComponentFixture<TeachViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeachViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
