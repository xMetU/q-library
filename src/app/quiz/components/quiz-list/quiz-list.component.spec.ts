import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizListComponent } from './quiz-list.component';

describe('QuizListComponent', () => {
  let fixture: ComponentFixture<QuizListComponent>;
  let component: QuizListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizListComponent]
    }).compileComponents();
    
    fixture = TestBed.createComponent(QuizListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
