import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Quiz } from '../interfaces/quiz';

const MOCK_QUIZZES: Quiz[] = [
  {
    id: '1',
    title: 'Quiz 1',
    description: 'This is the first quiz.',
    questions: [
      {
        id: '1.1',
        type: 'MULTIPLE_CHOICE_SINGLE_ANSWER',
        text: 'Is this a multiple choice question with only one correct answer?',
        feedback: 'Yes, this is a multiple choice question with only one correct answer.',
        answers: [
          { id: '1.1.1', text: 'Yes', value: 1 },
          { id: '1.1.2', text: 'No', value: 0 },
        ],
      },
      {
        id: '1.2',
        type: 'MULTIPLE_CHOICE_MULTIPLE_ANSWER',
        text: 'Is this a multiple choice question with multiple correct answers?',
        feedback: 'Yes, this is a multiple choice question with multiple correct answers.',
        answers: [
          { id: '1.2.1', text: 'Yes', value: 1 },
          { id: '1.2.2', text: 'Yes but 2 points', value: 2 },
          { id: '1.2.3', text: 'Yes but 3 points', value: 3 },
          { id: '1.2.4', text: 'No', value: 0 },
          { id: '1.2.5', text: 'No but -1 points', value: -1 },
          { id: '1.2.6', text: 'No but -2 points', value: -2 },
        ],
      },
      {
        id: '1.3',
        type: 'TEXT_BASED',
        text: 'Name one of the 7 continents.',
        feedback: 'The 7 continents are Asia, Africa, North America, South America, Antarctica, Europe, Australia',
        answers: [
          { id: '1.3.1', text: 'Asia', value: 1 },
          { id: '1.3.2', text: 'Africa', value: 1 },
          { id: '1.3.3', text: 'North America', value: 1 },
          { id: '1.3.4', text: 'South America', value: 1 },
          { id: '1.3.5', text: 'Antarctica', value: 1 },
          { id: '1.3.6', text: 'Europe', value: 1 },
          { id: '1.3.7', text: 'Australia', value: 1 },
        ],
      },
      {
        id: '1.4',
        type: 'MULTIPLE_CHOICE_SINGLE_ANSWER',
        text: '1 + 1 = 2',
        feedback: 'If you had 1 apple, then you got another apple, you would have 2 apples.',
        answers: [
          { id: '1.4.1', text: 'True', value: 1 },
          { id: '1.4.2', text: 'False', value: 0 },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'Quiz 2',
    description: 'This is the second quiz.',
    questions: [],
  },
  {
    id: '3',
    title: 'Quiz 3',
    description: 'This is the third quiz.',
    questions: [],
  },
  {
    id: '4',
    title: 'Quiz 4',
    description: 'This is the fourth quiz.',
    questions: [],
  },
  {
    id: '5',
    title: 'Quiz 5',
    description: 'This is the fifth quiz.',
    questions: [],
  },
  {
    id: '6',
    title: 'Quiz 6',
    description: 'This is the sixth quiz.',
    questions: [],
  },
];

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor() { }

  public getQuizzes(): Observable<Quiz[]> {
    return of(MOCK_QUIZZES);
  }
}
