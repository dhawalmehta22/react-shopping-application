import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import star from '../../assets/star.svg';
import colorStar from '../../assets/color-star.svg';
import rightArrow from '../../assets/rightArrow.svg';
import RightCart from '../Cart/cart';
import Popup from '../Popup/popup';
import './CourseTileList.css';
import "@fontsource/montserrat";
import tick from '../../assets/tick.svg';


import {
  getInProgress,
  getStoreCourses,
  addToCart,
  addToWishList,
} from "../../redux/CourseTable";

const CourseTileList: React.FC = () => {


  const [searchText] = React.useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const dispatch = useDispatch();

  const courses = useSelector(getStoreCourses);
  const inProgress = useSelector(getInProgress);

  console.log(inProgress, courses);

  const getFilteredCourses = () => {
    console.log("memo call happened");

    if (searchText) {
      console.log("search text");
      return courses.filter((item) => item.courseName.includes(searchText));
    } else {
      return courses;
    }
  };
  const filteredCourses = React.useMemo(getFilteredCourses, [searchText, courses]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }


  function handelOnLcikForAddToCart(id: number) {

      dispatch(addToCart(id));
      togglePopup();
  }

  function handelOnLcikForAddToWishList(id: number) {
    dispatch(addToWishList(id))
  }
  return (
    <>
      {
        <div className="data-grid row">
          <div className={'left-grid column'}>
            {
              filteredCourses.map(item => (

                <div className={'data-card row'}>

                  <div>
                    <div className="course-image column">
                    </div>
                    <div className="course-title column">
                      <b>{item.courseName}</b>
                    </div>
                    <div className="course-instructor column">
                      <p> <b>{item.instructorName}</b></p>
                    </div>
                    {
                      item.isAddedToWishList ?
                        <div className="wishlist-star column">
                          <img src={colorStar} onClick={() => handelOnLcikForAddToWishList(item.id)} alt="colorStar"/>
                        </div>
                        :
                        <div className="wishlist-star column">
                          <img src={star} onClick={() => handelOnLcikForAddToWishList(item.id)} alt="star"/>
                        </div>
                    }
                    <div className="course-price column">
                      <p><b> Rs {item.discountedPrice}/-</b></p>
                    </div>
                    <div className="course-price-original column">
                      <p> Rs {item.originalPrice}/-</p>
                    </div>
                  </div>
                  <div className=" column">
                    <button className="add-cart-button" onClick={
                      () => handelOnLcikForAddToCart(item.id)

                    } ref={buttonRef}>
                      ADD TO CART
                    </button>
                    {
                    isOpen && <Popup
                      content={<>
                      <div className="popup-content">
                      <img src={tick}  alt="tick"/> &ensp;
                             Course successfully added to cart
                      </div>
                        <button className="ok-button" onClick={togglePopup}>OK</button>
                      </>}
                      
                      handleClose={togglePopup}
                    />
                    }
                   
                  </div>
                  <div className="right-arrow">
                    <Link to={`/${item.id}`}>
                      <div >
                        <img src={rightArrow} alt="Arrow" />
                      </div>
                    </Link>
                  </div>

                </div>
              ))
            }
          </div>
          <RightCart />
        </div>
      }
    </>
  )
}

export default CourseTileList;
