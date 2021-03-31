import React, {} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import rightArrow from '../../assets/rightArrow.svg';
import deleteIcon from '../../assets/delete-icon.svg';
import './wishlist.css';
import {
    getStoreCourses,
    addToCart,
    addToWishList,
} from "../../redux/CourseTable";
import RightCart from '../Cart/cart';



const Wishlist: React.FC = () => {

    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const dispatch = useDispatch();
    const courses = useSelector(getStoreCourses);

    const getWishlistCourses = () => {
        console.log("memo call happened");

        return courses.filter((item) => item.isAddedToWishList);

    };
    const wishlistCourses = React.useMemo(getWishlistCourses, [courses]);

    function handelOnLcikForAddToCart(id: number) {
        dispatch(addToCart(id));
        // window.location.reload(false);
        // React.useState(true);
    }

    function handelOnLcikForAddToWishList(id: number) {
        dispatch(addToWishList(id))
        // window.location.reload(false);

    }

    return (
        <>
            {
                <div className="data-grid row">
                    <div className={'wishlist-left-grid column'}>
                        {
                            wishlistCourses.map(item => (

                                <div className={'wishlist-data-card row'}>

                                    <div>
                                        <div className="course-title column">
                                            <b>{item.courseName}</b>
                                        </div>
                                        <div className="course-instructor column">
                                            <p> <b>{item.instructorName}</b></p>
                                        </div>

                                        <div className="wishlist-course-price column">
                                            <p><b> Rs {item.discountedPrice}/-</b></p>
                                        </div>
                                        <div className="course-price-original column">
                                            <p> Rs {item.originalPrice}/-</p>
                                        </div>
                                    </div>
                                        <button className="wishlist-add-cart-button" onClick={
                                            () => handelOnLcikForAddToCart(item.id)

                                        } ref={buttonRef}>
                                            ADD TO CART
                                        </button>
                                        <div className="delete-icon column">
                                            <img src={deleteIcon} alt="deleteIcon" onClick={() => handelOnLcikForAddToWishList(item.id)} />
                                        </div>
                                    <div className="wishlist-right-arrow">
                                        <Link to={`/${item.id}`}>
                                            <div >
                                                <img src={rightArrow} alt="arrow"/>
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

export default Wishlist;
