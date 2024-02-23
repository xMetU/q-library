export interface Answer {
  id: string;
  text: string;
  value: number;
}

type QuestionType = 'MULTIPLE_CHOICE_SINGLE_ANSWER' | 'MULTIPLE_CHOICE_MULTIPLE_ANSWER' | 'TEXT_BASED'

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  feedback: string;
  answers: Answer[];
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}
