import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Category } from '../interfaces/category';

const MOCK_CATEGORIES: Category[] = [
  {
    id: '1',
    label: 'Category 1',
    children: [
      {
        id: '1.1',
        label: 'Subcategory 1.1',
        children: [
          {
            id: '1.1.1',
            label: 'Sub-subcategory 1.1.1',
            children: [],
          },
          {
            id: '1.1.2',
            label: 'Sub-subcategory 1.1.2',
            children: [],
          },
          {
            id: '1.1.3',
            label: 'Sub-subcategory 1.1.3',
            children: [],
          },
        ],
      },
      {
        id: '1.2',
        label: 'Subcategory 1.2',
        children: [],
      },
      {
        id: '1.3',
        label: 'Subcategory 1.3',
        children: [],
      },
    ],
  },
  {
    id: '2',
    label: 'Category 2',
    children: [
      {
        id: '2.1',
        label: 'Subcategory 2.1',
        children: [
          {
            id: '2.1.1',
            label: 'Sub-subcategory 2.1.1',
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: '3',
    label: 'Category 3',
    children: [
      {
        id: '3.1',
        label: 'Subcategory 3.1',
        children: [],
      },
      {
        id: '3.2',
        label: 'Subcategory 3.2',
        children: [],
      },
      {
        id: '3.3',
        label: 'Subcategory 3.3',
        children: [],
      },
      {
        id: '3.4',
        label: 'Subcategory 3.4',
        children: [],
      },
      {
        id: '3.5',
        label: 'Subcategory 3.5',
        children: [],
      },
    ],
  },
  {
    id: '4',
    label: 'Category 4',
    children: [],
  },
];

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() { }

  getCategories(): Observable<Category[]> {
    return of(MOCK_CATEGORIES);
  }
}
