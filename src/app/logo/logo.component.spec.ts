import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoComponent } from './logo.component';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should trigger title', () => {
    const logo = new LogoComponent();

    expect(component).toBeTruthy();
  });
  
  it('should mounted', () => {
    expect(component).toBeDefined();
  });
  
  it('should html', () => {
    const logoElement: HTMLElement = fixture.nativeElement;

    // should contain Ivan Malyarevich
    expect(logoElement.textContent).toContain(`Ivan Malyarevich`);
  });
});
