import React from 'react';
import DropdownF from './DropdownF/DropdownF'

const filters = (props) => {
    return(
        <div class="btn-group-sm dropdown">
            <button type="button" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle btn btn-secondary">Small Dropdown</button>
            <DropdownF />
        </div>
    );
}

export default filters;