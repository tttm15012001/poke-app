import React from "react";

function Button2(props) {
    const { value, handleClick, disable } = props;

    return (
        <button disabled={disable} onClick={evt => handleClick()}>{value}</button>
    )
}

export default Button2;