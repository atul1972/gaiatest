import React from 'react';
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate("/")
    }
    return (
        <>
            <header>
                <h2>Header Component</h2>
                <div className="logout" onClick={handleLogout}>Logout</div>
            </header>
        </>
    )
}
export default Header;