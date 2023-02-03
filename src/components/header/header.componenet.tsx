import React from "react";
import './header.styles.css';

const Header = () => {
    return(
        <div className="header">
            <div className="header-logo">
                <h1>images.ai</h1>
            </div>
            <div className="header-links">
                <h3>text to img</h3>
                <h3>magic img</h3>
            </div>
        </div>
    )
}

export default Header;