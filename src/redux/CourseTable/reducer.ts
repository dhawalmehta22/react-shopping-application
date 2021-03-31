
import {
  Action,
  ADD_TO_CART,
  ADD_OR_REMOVE_FROM_WISHLIST,
  GET_COURSES,
  GET_COURSES_SUCCESS,
  DELETE_FROM_CART,
} from "./action";
import { ICourseData } from "./models";

import { initialState, CourseStoreType } from "./models";

export default function reducer(
  state: CourseStoreType = initialState,
  action: Action
): CourseStoreType {
  console.log(action);
  switch (action.type) {
    case GET_COURSES:
      console.log('action',action);
      return {
        ...state,
        inProgress: true,
      };
    case GET_COURSES_SUCCESS:
      return {
        ...state,
        inProgress: false,
        data: action.data,
      };
      case ADD_TO_CART:{
        const newState  = JSON.parse(JSON.stringify(state.data))  || {} as ICourseData;
        const coursee :ICourseData= newState.find((item: any) => item.id === action.id) || {} as ICourseData;
        coursee.isAddedToCart=true; 

      return {  
        data:[...newState],
        inProgress: true,
      }};

      case DELETE_FROM_CART:{
        const newState  = JSON.parse(JSON.stringify(state.data))  || {} as ICourseData;
        const coursee :ICourseData= newState.find((item: any) => item.id === action.id) || {} as ICourseData;
        coursee.isAddedToCart=false; 

      return {  
        data:[...newState],
        inProgress: true,
      }};

      case ADD_OR_REMOVE_FROM_WISHLIST:{
        const newState  = JSON.parse(JSON.stringify(state.data))  || {} as ICourseData;
        const coursee :ICourseData= newState.find((item:any) => item.id === action.id) || {} as ICourseData;
        coursee.isAddedToWishList=!coursee.isAddedToWishList; 

      return {        
        data:[...newState],
        inProgress: true,
      }};
    default:
      return state;
  }
}
