import React from "react";

const CountrySimpleInfo = ({id, name, showFull: handleClick}) => {
    return (
        <div>
            {name}
            <button value={id} onClick={handleClick}>
                Show
            </button>
        </div>
    )
}

export default CountrySimpleInfo