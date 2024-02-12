import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxsModule } from '@ngxs/store';

import { CategoryListComponent } from './category-list.component';

describe('CategoryListComponent', () => {
  let component: CategoryListComponent;
  let fixture: ComponentFixture<CategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CategoryListComponent,
        NgxsModule.forRoot([]),
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
