import { CATEGORIES_ACTION_TYPES } from "./category-action-types";
import { createAction } from "../../utils/reducer/reducer";

export const setCategoriesMap = (categoriesMap) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);