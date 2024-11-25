import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToobalNavigationComponent } from './toobal-navigation.component';

describe('ToobalNavigationComponent', () => {
  let component: ToobalNavigationComponent;
  let fixture: ComponentFixture<ToobalNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToobalNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToobalNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
