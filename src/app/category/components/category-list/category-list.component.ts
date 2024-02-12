import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';

import { Select, Store } from '@ngxs/store';
import { Observable, merge, mergeMap, takeUntil, tap } from 'rxjs';

import { Category } from '../../interfaces/category';
import { FetchAll, SetExpanded, SetSelected } from '../../state/category.actions';
import { CategoryState } from '../../state/category.state';
import { ReactiveDirective } from '~/shared/directives/reactive.directive';

interface TreeNode {
  id: string;
  label: string;
  expandable: boolean;
  level: number;
}

class CategoryListTreeControl extends FlatTreeControl<TreeNode> {
  constructor(
    onCollapse: (dataNode: TreeNode) => void,
    onExpand: (dataNode: TreeNode) => void,
    isExpanded: (dataNode: TreeNode) => boolean,
  ) {
    super((node) => node.level, (node) => node.expandable);
    this.collapse = (node) => {
      onCollapse(node);
      super.collapse(node);
    };
    this.expand = (node) => {
      onExpand(node);
      super.expand(node);
    };
    this.isExpanded = isExpanded;
    this.toggle = (node) => {
      this.isExpanded(node) ? this.collapse(node) : this.expand(node);
      super.toggle(node);
    };
  }
}

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTreeModule,
  ],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
})
export class CategoryListComponent extends ReactiveDirective implements OnInit {
  @Select(CategoryState.all)
  $categories!: Observable<Category[]>;

  @Select(CategoryState.expanded)
  $expanded!: Observable<string[]>;
  expanded!: string[];

  @Select(CategoryState.selected)
  $selected!: Observable<string[]>;
  selected!: string[];

  treeControl = new CategoryListTreeControl(
    (node) => this.store.dispatch(new SetExpanded(this.expanded.filter((s) => s != node.id))),
    (node) => this.store.dispatch(new SetExpanded([...this.expanded, node.id])),
    (node) => this.expanded.includes(node.id),
  );
  treeFlattener = new MatTreeFlattener(
    (node: Category, level: number): TreeNode => ({ ...node, level, expandable: node.children.length > 0 }),
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children,
  );
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private store: Store) {
    super();
  }

  override ngOnInit() {
    this.store.dispatch(new FetchAll()).pipe(
      mergeMap(() => merge(
        this.$categories.pipe(takeUntil(this.$destroy), tap((categories) => this.dataSource.data = categories)),
        this.$expanded.pipe(takeUntil(this.$destroy), tap((expanded) => this.expanded = expanded)),
        this.$selected.pipe(takeUntil(this.$destroy), tap((selected) => this.selected = selected)),
      )),
    ).subscribe();
  }

  hasChild(_: number, node: TreeNode): boolean {
    return node.expandable;
  }

  isSelected(node: TreeNode): boolean {
    return this.selected.includes(node.id);
  }

  toggleSelected(node: TreeNode) {
    this.store.dispatch(new SetSelected(
      this.isSelected(node) ? this.selected.filter((s) => s != node.id) : [...this.selected, node.id],
    ));
  }
}
