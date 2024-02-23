import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';

import { routes } from './app.routes';
import { CategoryState } from './category/state/category.state';
import { QuizState } from './quiz/state/quiz.state';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      NgxsModule.forRoot([CategoryState, QuizState]),
      NgxsStoragePluginModule.forRoot({ key: CategoryState }),
    ),
    provideAnimationsAsync(),
    provideRouter(routes),
  ],
};
