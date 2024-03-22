import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriauxComponent } from './materiaux.component';

describe('MateriauxComponent', () => {
  let component: MateriauxComponent;
  let fixture: ComponentFixture<MateriauxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateriauxComponent]
    });
    fixture = TestBed.createComponent(MateriauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
