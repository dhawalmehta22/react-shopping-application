import { ICourseData } from "./models";

export const getStoreCourses = (state: any): Array<ICourseData> => {
    return state?.course?.data || [];
};

export const getInProgress = (state: any): boolean => {
    return state?.course?.inProgress;
}

export const getCourse = (id: number) => (store: any): ICourseData => {
    const users: Array<ICourseData> = store?.course?.data || [];
    return users.find(item => item.id === id) || {} as ICourseData;
}