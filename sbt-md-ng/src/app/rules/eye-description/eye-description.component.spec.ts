import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeDescriptionComponent } from './eye-description.component';

describe('EyeDescriptionComponent', () => {
  let component: EyeDescriptionComponent;
  let fixture: ComponentFixture<EyeDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EyeDescriptionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyeDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
