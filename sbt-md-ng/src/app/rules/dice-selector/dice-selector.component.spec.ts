import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceSelectorComponent } from './dice-selector.component';

describe('DiceSelectorComponent', () => {
  let component: DiceSelectorComponent;
  let fixture: ComponentFixture<DiceSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiceSelectorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
