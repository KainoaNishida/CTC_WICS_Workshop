import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      const updateTime = () => {
          const now = new Date();
          setHours(now.getHours());
          setMinutes(now.getMinutes());
          setSeconds(now.getSeconds());
      };
      updateTime();
      const intervalId = setInterval(updateTime, 1000);
      return () => clearInterval(intervalId);
  }, []);
    
    // const adjustHours = (increment) => {
    //     setHours((prevHours) => (prevHours + increment + 24) % 24);
    //   };
    
    //   const adjustMinutes = (increment) => {
    //     setMinutes((prevMinutes) => {
    //       let newMinutes = prevMinutes + increment;
    //       if (newMinutes >= 60) {
    //         adjustHours(1);
    //         newMinutes %= 60;
    //       } else if (newMinutes < 0) {
    //         adjustHours(-1);
    //         newMinutes += 60;
    //       }
    //       return newMinutes;
    //     });
    //   };
    
    //   const adjustSeconds = (increment) => {
    //     setSeconds((prevSeconds) => {
    //       let newSeconds = prevSeconds + increment;
    //       if (newSeconds >= 60) {
    //         adjustMinutes(1);
    //         newSeconds %= 60;
    //       } else if (newSeconds < 0) {
    //         adjustMinutes(-1);
    //         newSeconds += 60;
    //       }
    //       return newSeconds;
    //     });
    //   };

    return (
        <div style={{ textAlign: 'center', fontSize: '24px', padding: '20px' }}>
          <div style={{ marginBottom: '20px' }}>
            <h1>Clock</h1>
            <span>Time: {hours.toString().padStart(2, '0')}:</span>
            <span>{minutes.toString().padStart(2, '0')}:</span>
            <span>{seconds.toString().padStart(2, '0')}</span>
          </div>
        </div>
      );
    };
export default Clock;
