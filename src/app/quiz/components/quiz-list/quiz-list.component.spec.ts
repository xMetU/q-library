import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxsModule, State, Store } from '@ngxs/store';

import { QuizListComponent } from './quiz-list.component';
import { QuizStateModel } from '../../state/quiz.state';
import { FetchAll } from '~/quiz/state/quiz.actions';

const MOCK_QUIZ_STATE: QuizStateModel = {
  all: [
    {
      id: '1',
      title: 'Quiz 1',
      description: 'This is Quiz 1',
      questions: [],
    },
    {
      id: '2',
      title: 'Quiz 2',
      description: 'This is Quiz 2',
      questions: [],
    },
  ],
};

@State({ name: 'quiz', defaults: MOCK_QUIZ_STATE })
@Injectable()
class MockQuizState { }

describe('QuizListComponent', () => {
  let fixture: ComponentFixture<QuizListComponent>;
  let component: QuizListComponent;
  let store: Store;
  let dispatchSpy: jest.SpyInstance;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        QuizListComponent,
        NgxsModule.forRoot([MockQuizState]),
      ],
    }).compileComponents();
    
    fixture = TestBed.createComponent(QuizListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    dispatchSpy = jest.spyOn(store, 'dispatch');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch all quizzes', () => {
    component.ngOnInit();
    expect(dispatchSpy).toHaveBeenCalledWith(new FetchAll());
  });
});
