import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

import { Select, Store } from '@ngxs/store';
import { Observable, switchMap, takeUntil, tap } from 'rxjs';

import { Quiz } from '../../interfaces/quiz';
import { QuizState } from '../../state/quiz.state';
import { QuizListItemComponent } from '../quiz-list-item/quiz-list-item.component';
import { FetchAll } from '~/quiz/state/quiz.actions';
import { ReactiveDirective } from '~/shared/directives/reactive.directive';

@Component({
  selector: 'app-quiz-list',
  standalone: true,
  imports: [
    MatGridListModule,
    QuizListItemComponent,
  ],
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.css',
})
export class QuizListComponent extends ReactiveDirective implements OnInit {
  @Select(QuizState.all)
  $quizzes!: Observable<Quiz[]>;
  quizzes!: Quiz[];

  constructor(private store: Store) {
    super();
  }

  override ngOnInit() {
    this.store.dispatch(new FetchAll()).pipe(
      switchMap(() => this.$quizzes.pipe(takeUntil(this.$destroy), tap((quizzes) => this.quizzes = quizzes))),
    ).subscribe();
  }
}
