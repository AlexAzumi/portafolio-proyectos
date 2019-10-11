// Dependencias
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// Componentes
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should create a h2 tag with 'Hola, mi nombre es'`, () => {
    const compiled = fixture.debugElement.nativeNode;
    expect(compiled.querySelector('h2').textContent).toBe('Hola, mi nombre es');
  });

  it(`should create a h1 tag with 'Alejandro Suárez'`, () => {
    const compiled = fixture.debugElement.nativeNode;
    expect(compiled.querySelector('h1').textContent).toBe('Alejandro Suárez');
  });
});
