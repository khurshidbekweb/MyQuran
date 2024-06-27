import {useEffect, useState } from "react";
import PropTypes from 'prop-types';


const TimeLeft = ({data, time}) => {
    const [timeRemaining, setTimeRemaining] = useState({});
  
  const calculateTimeRemaining = (endtime) => {
    const now = new Date();
    const timeRemaining = Date.parse(endtime) - Date.parse(now);
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    const seconds = Math.floor((timeRemaining / 1000) % 60);
    return {
      total: timeRemaining,
      hours,
      minutes,
      seconds,
    };
  };

  const getEndTime = (timeString) => {
    const [hours, minutes] = timeString.split(':').map(Number);
    const currentDate = new Date();
    return new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hours, minutes, 0);
  };

  useEffect(() => {
    const endTime = getEndTime(data?.times[`${time}`]); // Change this to the desired prayer time
    const updateClock = () => {
      const t = calculateTimeRemaining(endTime);
      setTimeRemaining(t);
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, [data?.times[`${time}`]]);
    return (
            <p className='playfairFont text-[20px] text-white font-semibold mt-[-5px]'>
                {timeRemaining.total > 0 ? (
                <>
                    -{('0' + timeRemaining.hours).slice(-2)}:
                    {('0' + timeRemaining.minutes).slice(-2)}:
                    {('0' + timeRemaining.seconds).slice(-2)}
                </>
                ) : (
                <span>Time is up!</span>
                )}
            </p>
    );
};
TimeLeft.propTypes = {
    data: PropTypes.shape({
      region: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      weekday: PropTypes.string.isRequired,
      hijri_date: PropTypes.shape({
        month: PropTypes.string.isRequired,
        day: PropTypes.number.isRequired,
      }).isRequired,
      times: PropTypes.shape({
        tong_saharlik: PropTypes.string.isRequired,
        quyosh: PropTypes.string.isRequired,
        peshin: PropTypes.string.isRequired,
        asr: PropTypes.string.isRequired,
        shom_iftor: PropTypes.string.isRequired,
        hufton: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    time: PropTypes.string.isRequired
  };

export default TimeLeft;