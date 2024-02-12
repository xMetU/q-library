import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';

import { Subscription } from 'rxjs';

import { Category } from '../../interfaces/category';
import { CategoryService } from '~/category/services/category.service';

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
export class CategoryListComponent implements OnDestroy, OnInit {
  expanded: string[] = [];
  selected: string[] = [];

  private categoriesSub!: Subscription;

  treeControl = new CategoryListTreeControl(
    (node) => this.expanded = this.expanded.filter((s) => s != node.id),
    (node) => this.expanded = [...this.expanded, node.id],
    (node) => this.expanded.includes(node.id),
  );
  treeFlattener = new MatTreeFlattener(
    (node: Category, level: number): TreeNode => ({ ...node, level, expandable: node.children.length > 0 }),
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children,
  );
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoriesSub = this.categoryService.getCategories()
      .subscribe((categories) => this.dataSource.data = categories);
  }

  ngOnDestroy() {
    this.categoriesSub.unsubscribe();
  }

  hasChild(_: number, node: TreeNode): boolean {
    return node.expandable;
  }

  isSelected(node: TreeNode): boolean {
    return this.selected.includes(node.id);
  }

  toggleSelected(node: TreeNode) {
    this.selected = this.isSelected(node) ? this.selected.filter((s) => s != node.id) : [...this.selected, node.id];
  }
}
