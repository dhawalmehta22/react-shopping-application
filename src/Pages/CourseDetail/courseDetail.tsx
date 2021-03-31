import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Popup from '../Popup/popup';

import './courseDetail.css';

import {
    getCourses,
    getCourse,
    addToCart,
    addToWishList,
} from "../../redux/CourseTable";

const CourseDetail: FC = () => {

    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenForWishList, setIsOpenForWishList] = useState(false);

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getCourses());
    }, [dispatch]);

    const { id } = useParams<{ id: string }>();
    const course = useSelector(getCourse(parseInt(id)));

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const togglePopupForWishList=()=>{
        setIsOpenForWishList(!isOpenForWishList);
    }
    function handelOnLcikForAddToCart(id: number) {
        dispatch(addToCart(id));
        togglePopup();

    }

    function handelonclickForWishList(id: number) {

    dispatch(addToWishList(id));
    togglePopupForWishList();

    }
    return (
        <>
            <div className="title-bar row">

            </div>
            <div className="black-grid row">
                <div className="row">
                    <p className="para-title">{course.courseName}</p>
                </div>
                <div className="row">
                    <p className="para-intro">{course.courseDetails.substring(0, 100)}</p>
                </div>
                <div className="row">
                    <p className="para-author">{course.instructorName}</p>
                </div>


            </div>
            <div className="course-video">
                <video width="515" height="332"
                    src={course.courseVideoLink} controls />
            </div>

            <div className="row">
                <div className="left-info-card column">
                    <h3>Course Details</h3>
                    <p>{course.courseDetails} </p>
                </div>
                <div className="right-info-card column">
                    <p className="cart-amount"> <b>Rs {course.discountedPrice}/-</b> </p>
                    <p className="course-price-original"> <b>Rs {course.originalPrice}/-</b> </p>

                    <div className="course-details-button">
                    <p className="time-left"> <b>{course.timeLeftForPrice}</b> left for this price! </p>

                        <div className="column">
                            <button className="cart-button" onClick={() => handelOnLcikForAddToCart(course.id)} ref={buttonRef}>ADD TO CART</button>
                            {isOpen && <Popup
                                content={<>
                                    <p>Course successfully added to cart</p>
                                    <button className="ok-button" onClick={togglePopup}>OK</button>
                                </>}
                                handleClose={togglePopup}
                            />}
                            &nbsp;&nbsp;&nbsp;
                            <button className="wishlist-button" onClick={() => handelonclickForWishList(course.id)} ref={buttonRef}>ADD TO WISHLIST</button>
                            {isOpenForWishList && <Popup
                                content={<>
                                    <p>Course successfully added to Your wishlist</p>
                                    <button className="ok-button" onClick={togglePopupForWishList}>OK</button>
                                </>}
                                handleClose={togglePopupForWishList}
                            />}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default CourseDetail;
