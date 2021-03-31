import React, {} from 'react';
import react from '../../assets/react.png'
import { useDispatch } from "react-redux";
import './dashboard.css';
import SearchSortTile from '../SearchAndSortTile/searchAndSortTile';
import {getCourses} from "../../redux/CourseTable";

const Dashboard: React.FC = () => {

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getCourses());
      },[dispatch]);

    return (
        <>
            <div className="black-div">
                <p className="white-font"> Discover Latest Courses On<br></br> React</p>
                <img src={react} className="react-logo" alt="reactLogo"/>
            </div>

            <SearchSortTile />
        </>
    )

}


export default Dashboard;