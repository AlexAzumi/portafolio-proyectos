// Dependencias
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Componentes
import { ContactComponent } from './contact.component';
import { FooterComponent } from '../GLOBAL/footer/footer.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule
      ],
      declarations: [
        ContactComponent,
        FooterComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a h2 tag with 'Contacto'`, () => {
    const compiled = fixture.debugElement.nativeNode;
    expect(compiled.querySelector('h2').textContent).toBe('Contacto');
  });
});
