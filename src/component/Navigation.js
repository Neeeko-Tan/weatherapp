import React from 'react';

function Navigation(props) {
	return (
		<nav>
		  	<div>
                <input 
                    onChange = {props.handleSearchValueChange}
                    value = {props.searchValue}
                    className="search-input" 
                />
				<button className="search-btn">
					<i className="fa fa-search" />
				</button>
				<button className="temp-switch">
					<i
						className="fa fa-thermometer-empty temp-switch__icon"
						aria-hidden="true"
					/>
					<sup>&deg;</sup>C
				</button>
		  	</div>
		</nav>
	);
}

export default Navigation;
