import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrowebLoaderComponent } from './introweb-loader.component';

describe('IntrowebLoaderComponent', () => {
  let component: IntrowebLoaderComponent;
  let fixture: ComponentFixture<IntrowebLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrowebLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntrowebLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
