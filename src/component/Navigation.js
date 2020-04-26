import React from 'react';

function Navigation() {
    
    return (
        <nav>
            <div className="search-style">
                <input className="search-input"/>
                <button className="search-btn">
                    <i className="fa fa-search" />
                </button>

                <button className="temp-switch" >
                    <i
                        className="fa fa-thermometer-empty temp-switch_icon"
                        aria-hidden="true"
                    />
                    <sup>&deg;</sup>C
                </button>

                
            </div>
        </nav>
        
    );
}

export default Navigation;