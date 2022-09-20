import { createSelector } from "reselect";

import { CategoriesState } from "./category-reducer";

import { CategoryMap } from "./category-action-types";
import { RootState } from "../store";

const selectCategoryReducer = (state: RootState): CategoriesState =>
  state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer], //input selectors
  (categoriesSlice) => categoriesSlice.categories //output selectors
);

//using create selector so as long as categories array remains same we don't re run the method and just get previous value
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
