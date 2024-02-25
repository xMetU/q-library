import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxsModule, State, Store } from '@ngxs/store';

import { CategoryListComponent, TreeNode } from './category-list.component';
import { FetchAll, SetExpanded, SetSelected } from '~/category/state/category.actions';
import { CategoryStateModel } from '~/category/state/category.state';

const MOCK_CATEGORY_STATE: CategoryStateModel = {
  all: [
    {
      id: '1',
      label: 'Category 1',
      children: [
        {
          id: '2',
          label: 'Category 2',
          children: [],
        },
      ],
    },
  ],
  expanded: [],
  selected: [],
};

@State({ name: 'category', defaults: MOCK_CATEGORY_STATE })
@Injectable()
class MockCategoryState { }

describe('CategoryListComponent', () => {
  let fixture: ComponentFixture<CategoryListComponent>;
  let component: CategoryListComponent;
  let store: Store;
  let dispatchSpy: jest.SpyInstance;
  let targetNode: TreeNode;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CategoryListComponent,
        NgxsModule.forRoot([MockCategoryState]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    dispatchSpy = jest.spyOn(store, 'dispatch');
    fixture.detectChanges();
    targetNode = component.treeControl.dataNodes[0];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch all categories', () => {
    component.ngOnInit();
    expect(dispatchSpy).toHaveBeenCalledWith(new FetchAll());
  });

  it('should update the state when a category is expanded', () => {
    fixture.debugElement.nativeElement.querySelector('button[mat-icon-button]').click();
    expect(dispatchSpy).toHaveBeenCalledWith(new SetExpanded([targetNode.id]));
  });

  it('should update the state when a category is collapsed', () => {
    component.expanded = [targetNode.id];
    fixture.debugElement.nativeElement.querySelector('button[mat-icon-button]').click();
    expect(dispatchSpy).toHaveBeenCalledWith(new SetExpanded([]));
  });

  it('should update the state when a category is selected', () => {
    fixture.debugElement.nativeElement.querySelector('mat-button-toggle').click();
    expect(dispatchSpy).toHaveBeenCalledWith(new SetSelected([targetNode.id]));
  });

  it('should update the state when a category is deselected', () => {
    component.selected = [targetNode.id];
    fixture.debugElement.nativeElement.querySelector('mat-button-toggle').click();
    expect(dispatchSpy).toHaveBeenCalledWith(new SetSelected([]));
  });
});
