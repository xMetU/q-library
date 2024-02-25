import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Quiz } from '~/quiz/interfaces/quiz';

@Component({
  selector: 'app-quiz-list-item',
  standalone: true,
  imports: [],
  templateUrl: './quiz-list-item.component.html',
  styleUrl: './quiz-list-item.component.css',
})
export class QuizListItemComponent {
  @Input({ required: true }) quiz!: Quiz;

  constructor(private router: Router) { }

  startQuiz() {
    this.router.navigate([`quiz/${this.quiz.id}`]);
  }
}
