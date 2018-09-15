import React from 'react';

const dropdownF = (props) => {
    return(
        <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu">
            <h6 tabindex="-1" class="dropdown-header">Header</h6>
            <button type="button" disabled="" tabindex="-1" class="disabled dropdown-item">Action</button>
            <button type="button" tabindex="0" class="dropdown-item">Another Action</button>
            <div tabindex="-1" class="dropdown-divider"></div>
            <button type="button" tabindex="0" class="dropdown-item">Another Action</button>
        </div>
);
}

export default dropdownF;