import React, { useState } from 'react';

export default function Index() {
    const [Minutes, setMinutes] = useState(5);
    const [Seconds, setSeconds] = useState(0);
    const countDown = () => {
        if (Minutes === 0 && Seconds === 0) {
            document.getElementById("rebookTicket").style.display="block";
        }
        else {
            setTimeout(() => {
                if (Seconds === 0) {
                    setSeconds(59);
                    setMinutes(Minutes - 1);
                }
                else {
                    setSeconds(Seconds - 1);
                }
            }, 1000);
        }
    }
    countDown();
    return (
        <>
            <div className="countDown">
                <p className='m-0'>Thời Gian Giữ Ghế:</p><span className="timeCountDown">0{Minutes}:{Seconds}</span>
            </div>
        </>

    )
}
