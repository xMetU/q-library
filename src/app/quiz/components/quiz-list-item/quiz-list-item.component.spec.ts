import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { QuizListItemComponent } from './quiz-list-item.component';
import { Quiz } from '../../interfaces/quiz';

const MOCK_QUIZ: Quiz = {
  id: '1',
  title: 'Quiz 1',
  description: 'This is Quiz 1',
  questions: [],
};

const MOCK_ROUTER = {
  navigate: jest.fn(),
};

describe('QuizListItemComponent', () => {
  let fixture: ComponentFixture<QuizListItemComponent>;
  let component: QuizListItemComponent;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizListItemComponent],
      providers: [{ provide: Router, useValue: MOCK_ROUTER }],
    }).compileComponents();
    
    fixture = TestBed.createComponent(QuizListItemComponent);
    component = fixture.componentInstance;
    component.quiz = MOCK_QUIZ;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start the quiz', () => {
    const navigateSpy = jest.spyOn(router, 'navigate');
    fixture.debugElement.nativeElement.querySelector('button').click();
    expect(navigateSpy).toHaveBeenCalledWith([`quiz/${MOCK_QUIZ.id}`]);
  });
});
