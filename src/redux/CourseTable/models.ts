export interface ICourseData {
    id: number;
    image: string;
    courseName: string;
    isAddedToCart: boolean;
    instructorName: string;
    discountedPrice: number;
    originalPrice: number;
    isAddedToWishList: boolean;
    courseVideoLink: string;
    courseDetails: string;
    tags: string;
    timeLeftForPrice: string;
}

export type CourseStoreType = {
    inProgress: boolean;
    data: Array<ICourseData>;
}

export const initialState: CourseStoreType = {
    inProgress: false,
    data: []
}

export const key = 'course'
