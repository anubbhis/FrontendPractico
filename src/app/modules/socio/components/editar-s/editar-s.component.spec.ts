import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSComponent } from './editar-s.component';

describe('EditarSComponent', () => {
  let component: EditarSComponent;
  let fixture: ComponentFixture<EditarSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
