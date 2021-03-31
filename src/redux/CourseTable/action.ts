import { Dispatch } from "react";
import { ICourseData } from "./models";
import request from '../../assets/response.json';


export const GET_COURSES = "course/GET_COURSES";
export const GET_COURSES_SUCCESS = "course/GET_COURSES_SUCCESS";
export const ADD_TO_CART = "course/ADD_TO_CART";
export const DELETE_FROM_CART = "course/DELETE_FROM_CART";
export const ADD_OR_REMOVE_FROM_WISHLIST = "course/ADD_OR_REMOVE_FROM_WISHLIST";
// export const DELETE_FROM_WISHLIST = "course/DELETE_FROM_WISHLIST";

type GetCourses = {
  type: typeof GET_COURSES;
  
};

// type GetGithubUser = {
//   type: typeof GET_GITHUB_USERS;
// };



export const getCourses =   () => {


  return (
    dispatch: Dispatch<
      GetCourses | GetCoursesSuccess
    >
  ) => {
    dispatch(({
      type: 'course/GET_COURSES'
    }));

    fetch("")
    .then((res) =>request)
    .then((response: Array<any>) => {
        const data = response.map((item) => {
          return {
            id: item?.id,
            image: item?.image,
            courseName: item?.courseName,
            isAddedToCart: item?.isAddedToCart,
            instructorName: item?.instructorName,
            discountedPrice: item?.discountedPrice,
            originalPrice: item?.originalPrice,
            isAddedToWishList: item?.isAddedToWishList,
            courseVideoLink: item?.courseVideoLink,
            courseDetails: item?.courseDetails,
            tags: item?.tags,
            timeLeftForPrice: item?.timeLeftForPrice,
          };
        });
        console.log(data);
        dispatch(getCoursesSuccess(data));
      })
  };
};

type GetCoursesSuccess = {
  type: typeof GET_COURSES_SUCCESS;
  data: Array<ICourseData>;
};

const getCoursesSuccess = (data: Array<ICourseData>): GetCoursesSuccess => ({
  type: GET_COURSES_SUCCESS,
  data:data,
});

// type GetGithubUsersFailed = {
//   type: typeof GET_GITHUB_USERS_FAILED;
// };

// const getGithubUsersFailed = (): GetGithubUsersFailed => ({
//   type: GET_GITHUB_USERS_FAILED,
// });

type DeleteFromCart = {
  type: typeof DELETE_FROM_CART;
  id: number;
};

type AddToCart = {
  type: typeof ADD_TO_CART;
  id: number;

};

type AddOrRemoveFromWishList = {
  type: typeof ADD_OR_REMOVE_FROM_WISHLIST;
  id: number;
};

export const addToCart = (id: number): AddToCart => ({
  type: ADD_TO_CART,
  id,
})

export const addToWishList = (id: number): AddOrRemoveFromWishList => ({
  type: ADD_OR_REMOVE_FROM_WISHLIST,
  id,
})

export const deleteFromCart = (id: number): DeleteFromCart => ({
  type: DELETE_FROM_CART,
  id,
});

export type Action =
  | GetCourses
  | GetCoursesSuccess
  | AddToCart
  | DeleteFromCart
  | AddOrRemoveFromWishList;
