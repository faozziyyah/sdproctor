import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const CountdownTimer = () => {
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);

  const navigate = useNavigate()

  useEffect(() => {

    const countdownInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        clearInterval(countdownInterval);
        // Perform logout action when the countdown reaches zero
        navigate('/login')
      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(countdownInterval);
    
  }, [minutes, seconds]);

  return (
    <div>
      <p>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </p>
    </div>
  );
};

export {CountdownTimer};
