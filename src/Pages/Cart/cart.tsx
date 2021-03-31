import { useSelector} from "react-redux";
import './Cart.css';
import {getStoreCourses} from "../../redux/CourseTable";
import React, {} from 'react';

const RightCart: React.FC= () => {

const courses = useSelector(getStoreCourses);

const getTotalCartValue = () => {

    console.log("getTotalCartValue call happened");

    var total = 0;
    console.log(cartCourses);
    total = cartCourses.reduce((sum, li) => sum + li.discountedPrice, 0);
    return total;

  }
  const getCartCourses = () => {
    console.log("memo call happened");

    return courses.filter((item) => item.isAddedToCart);

  };
  const cartCourses = React.useMemo(getCartCourses, [courses]);
  const cartTotalValue = getTotalCartValue();
console.log(cartTotalValue);

    return (

        <div className="right-card column">
          <p className="cartDetails">YOUR CART DETAILS</p>
          <div className="right-grid row">
            {
                cartCourses.length>0?
              cartCourses.map(item => (

                <div className="card-cart column">
                  <p className="card-cart-course-name">{item.courseName}</p>
                  <p className="card-cart-price"><b> Rs {item.discountedPrice}/-</b></p>
                </div>
              ))
            
            :
            <div className="card-cart column">
            <p className="card-cart-course-name">Your cart is empty right now. Please add courses in the cart from the list</p>
          </div>
            
            
        }
          </div>
          <div className="cart-value row">

            <p className="value-para">Total Cart value <br></br>
              <b> Rs {cartTotalValue}/- </b>
            </p>

          </div>
        </div>
    )



}



export default RightCart;
