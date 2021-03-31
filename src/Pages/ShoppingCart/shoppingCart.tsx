import React, {} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import rightArrow from '../../assets/rightArrow.svg';
import deleteIcon from '../../assets/delete-icon.svg';
import '../Wishlist/wishlist.css';
import './shoppingCart.css';
import {
    getStoreCourses,
    deleteFromCart,
} from "../../redux/CourseTable";
import RightCart from '../Cart/cart';


const ShoppingCart: React.FC = () => {

    const dispatch = useDispatch();
    const courses = useSelector(getStoreCourses);

    const getCartCourses = () => {
        console.log("memo call happened");

        return courses.filter((item) => item.isAddedToCart);

    };
    const cartCourses = React.useMemo(getCartCourses, [courses]);

    function handelDeleteFromCart(id: number) {
        dispatch(deleteFromCart(id))
    }

    return (
        <>
            {
                <div className="data-grid row">
                    <div className={'wishlist-left-grid column'}>
                        {
                            cartCourses.map(item => (

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
                                        <div className="shopping-cart-course-price-original column">
                                            <p> Rs {item.originalPrice}/-</p>
                                        </div>
                                    </div>
                                        
                                        <div className="delete-icon column">
                                            <img src={deleteIcon} onClick={() => handelDeleteFromCart(item.id)} alt="delIcon" />
                                        </div>
                                    <div className="shopping-right-arrow">
                                        <Link to={`/${item.id}`}>
                                            <div >
                                                <img src={rightArrow} alt="rightArrow"/>
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

export default ShoppingCart;
