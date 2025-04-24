import { useState, useEffect } from "react";

export default function CountDown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 463,
    hours: 11,
    minutes: 58,
    seconds: 1,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { days, hours, minutes, seconds } = prevTime;

        // Calculate new time
        let newSeconds = seconds - 1;
        let newMinutes = minutes;
        let newHours = hours;
        let newDays = days;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        if (newHours < 0) {
          newHours = 23;
          newDays -= 1;
        }

        // Stop the countdown when all values reach 0
        if (
          newDays <= 0 &&
          newHours <= 0 &&
          newMinutes <= 0 &&
          newSeconds <= 0
        ) {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format numbers to always show 2 digits
  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className="flex justify-center items-center gap-6 md:gap-8 mt-[40px] mb-[40px]">
      {/* Days */}
      <div className="flex flex-col items-center bg-[#F3F6FB] rounded-[10px] p-5">
        <span className="text-sm text-gray-600 font-medium uppercase tracking-wider">
          Days
        </span>
        <span className="text-2xl md:text-3xl font-bold">{timeLeft.days}</span>
      </div>

      {/* Hours */}
      <div className="flex flex-col items-center bg-[#F3F6FB] rounded-[10px] p-5">
        <span className="text-sm text-gray-600 font-medium uppercase tracking-wider">
          Hours
        </span>
        <span className="text-2xl md:text-3xl font-bold">
          {formatNumber(timeLeft.hours)}
        </span>
      </div>

      {/* Minutes */}
      <div className="flex flex-col items-center bg-[#F3F6FB] rounded-[10px] p-5">
        <span className="text-sm text-gray-600 font-medium uppercase tracking-wider">
          Minutes
        </span>
        <span className="text-2xl md:text-3xl font-bold">
          {formatNumber(timeLeft.minutes)}
        </span>
      </div>

      {/* Seconds */}
      <div className="flex flex-col items-center bg-[#F3F6FB] rounded-[10px] p-5">
        <span className="text-sm text-gray-600 font-medium uppercase tracking-wider">
          Seconds
        </span>
        <span className="text-2xl md:text-3xl font-bold">
          {formatNumber(timeLeft.seconds)}
        </span>
      </div>
    </div>
  );
}
