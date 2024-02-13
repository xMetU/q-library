import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxsModule } from '@ngxs/store';

import { CategoryListComponent } from './category-list.component';

describe('CategoryListComponent', () => {
  let fixture: ComponentFixture<CategoryListComponent>;
  let component: CategoryListComponent;

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

  describe('state interactions', () => {
    it('should fetch all categories', () => {

    });

    it('should update the state when a category is expanded', () => {

    });

    it('should update the state when a category is selected', () => {

    });
  });
});
