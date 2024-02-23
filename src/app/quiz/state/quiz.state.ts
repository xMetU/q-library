import { Injectable } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

import { FetchAll } from './quiz.actions';
import { Quiz } from '../interfaces/quiz';
import { QuizService } from '../services/quiz.service';


export interface QuizStateModel {
  all: Quiz[];
}

@State<QuizStateModel>({
  name: 'quiz',
  defaults: {
    all: [],
  },
})
@Injectable()
export class QuizState {
  constructor(private quizService: QuizService) { }

  @Selector()
  static all(state: QuizStateModel): Quiz[] {
    return state.all;
  }

  @Action(FetchAll)
  fetchAll({ patchState }: StateContext<QuizStateModel>) {
    return this.quizService.getQuizzes().pipe(tap((all) => patchState({ all })));
  }
}
