import React from "react";

const Notification = ({message, color}) => {
    if (message === null) {
        return null
    }
    
    const notificationStyle = {
        color: color,
        fontSize: 20,
        background: 'lightgrey',
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    return (
        <div style={notificationStyle}>
            {message}
        </div>
    )
}

export default Notification