import React, { useEffect, useState } from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import menuDataJson from '../login.json'
import BasicDetails from "./BasicDetails";
import AddressDetails from "./AddressDetails";
import PersonalDetails from "./PersonalDetails";
import CompanyDetails from './CompanyDetails';

const menuData = menuDataJson.menuData;

const Dashboard = () => {
    const navigate = useNavigate();
    const [steps, setSteps] = useState(1);
    const [isBDFilled, setIsBDFilled] = useState(false);
    const [isADFilled, setIsADFilled] = useState(false);
    const [isPDFilled, setIsPDFilled] = useState(false);
    const username = localStorage.getItem('username');

    const handleState = (newValue) => {
        setSteps(newValue);
    }

    const handleBD = (newValue) => {
        setIsBDFilled(newValue);
    }

    const handleAD = (newValue) => {
        setIsADFilled(newValue);
    }

    const handlePD = (newValue) => {
        setIsPDFilled(newValue);
    }

    Object.keys(menuData).map((item, i)=>{
        if(username===menuData[item].username) {
            localStorage.setItem("role", menuData[item].role);
        }
    })
    
    const role = localStorage.getItem('role');
    
    useEffect(() => {
        if(username===null) {
            navigate("/");
        }
    },[]);

//    console.log('first',isBDFilled,'=',isADFilled,'=',isPDFilled)
    return (
        <div>
            <Header />
            <Sidebar updateSteps={handleState} username={username} steps={steps} />
            <div className="pageLayout">
                {
                    steps===1 && (
                        <BasicDetails stepsCompleted={handleBD} />
                    )
                }
                {
                    steps===2 && (
                        <AddressDetails stepsCompleted={handleAD} />
                    )
                }
                {
                    steps===3 && (
                        <PersonalDetails stepsCompleted={handlePD} isBDFilled={isBDFilled} isADFilled={isADFilled} isPDFilled={isPDFilled} />
                    )
                }
                {
                    steps===4 && (
                        <CompanyDetails stepsCompleted={handlePD} isBDFilled={isBDFilled} isADFilled={isADFilled} isPDFilled={isPDFilled} />
                    )
                }
            </div>
        </div>
    )
}
export default Dashboard;