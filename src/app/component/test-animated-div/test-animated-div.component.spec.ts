import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAnimatedDivComponent } from './test-animated-div.component';

describe('TestAnimatedDivComponent', () => {
  let component: TestAnimatedDivComponent;
  let fixture: ComponentFixture<TestAnimatedDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestAnimatedDivComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestAnimatedDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
