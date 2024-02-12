import { Injectable } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

import { FetchAll, SetExpanded, SetSelected } from './category.actions';
import { Category } from '../interfaces/category';
import { CategoryService } from '../services/category.service';

interface CategoryStateModel {
  all: Category[];
  expanded: string[];
  selected: string[];
}

@State<CategoryStateModel>({
  name: 'category',
  defaults: {
    all: [],
    expanded: [],
    selected: [],
  },
})
@Injectable()
export class CategoryState {
  constructor(private categoryService: CategoryService) { }

  @Selector()
  static all(state: CategoryStateModel): Category[] {
    return state.all;
  }

  @Selector()
  static expanded(state: CategoryStateModel): string[] {
    return state.expanded;
  }

  @Selector()
  static selected(state: CategoryStateModel): string[] {
    return state.selected;
  }

  @Action(FetchAll)
  fetchAll({ patchState }: StateContext<CategoryStateModel>) {
    return this.categoryService.getCategories().pipe(tap((all) => patchState({ all })));
  }

  @Action(SetExpanded)
  setExpanded({ patchState }: StateContext<CategoryStateModel>, { expanded }: SetExpanded) {
    patchState({ expanded });
  }

  @Action(SetSelected)
  setSelected({ patchState }: StateContext<CategoryStateModel>, { selected }: SetSelected) {
    patchState({ selected });
  }
}
