import { createSelector } from 'reselect';

const selectCategoriesReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoriesReducer],  
  (categoriesSlice)=>categoriesSlice.categories //run this only once when categoriesSlice changes
)


export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>      //run this only once when categories changes
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
)

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoading //run this only once when categoriesSlice changes
)