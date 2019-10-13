import React from 'react';

export default function DateBox(props) {
    const fullDate = props.fullDate;
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return (
        <div class="date-box">
            <div>
                <h3>{dayNames[fullDate.getDay()]}</h3>
            </div>
            <div>
                <h3>{monthNames[fullDate.getMonth()] + ' ' + fullDate.getDate()}</h3>
            </div>
        </div>
    );
}