import { Routes } from '@angular/router';

import { QuizListComponent } from './quiz/components/quiz-list/quiz-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'quizzes', pathMatch: 'full' },
  { path: 'quizzes', component: QuizListComponent },
];
