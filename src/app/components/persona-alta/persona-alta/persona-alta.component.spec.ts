import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaAltaComponent } from './persona-alta.component';

describe('PersonaAltaComponent', () => {
  let component: PersonaAltaComponent;
  let fixture: ComponentFixture<PersonaAltaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonaAltaComponent]
    });
    fixture = TestBed.createComponent(PersonaAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
