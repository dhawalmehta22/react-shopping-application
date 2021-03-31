import { combineReducers } from "redux";
import { CoursesDataReducer, key as CoursesDataKey } from './CourseTable';

export default combineReducers({
    [CoursesDataKey]: CoursesDataReducer,
})
