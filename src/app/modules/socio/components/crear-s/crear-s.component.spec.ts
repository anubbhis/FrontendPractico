import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSComponent } from './crear-s.component';

describe('CrearSComponent', () => {
  let component: CrearSComponent;
  let fixture: ComponentFixture<CrearSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
