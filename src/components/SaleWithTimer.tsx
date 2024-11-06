"use client";

import React, { useState, useEffect } from "react";
import Headings from "./Headings";

const SaleWithTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set your target date and time here
  const targetDate = new Date("2024-12-31T23:59:59").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex justify-between items-center my-10 mx-20 bg-white shadow-sm rounded-lg">
      <Headings heading1={"Today's"} heading2={"Flash Sales"}/>
      <div className="flex items-center">
        <div></div>
        <div className="flex items-center space-x-4 mx-28 ">
          <div className="text-center">
            <span className="text-2xl font-bold">
              {String(timeLeft.days).padStart(2, "0")}
            </span>
            <p className="text-sm text-gray-500">Days</p>
          </div>
          <span className="text-red-500 text-lg">:</span>
          <div className="text-center">
            <span className="text-2xl font-bold">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <p className="text-sm text-gray-500">Hours</p>
          </div>
          <span className="text-red-500 text-lg">:</span>
          <div className="text-center">
            <span className="text-2xl font-bold">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <p className="text-sm text-gray-500">Minutes</p>
          </div>
          <span className="text-red-500 text-lg">:</span>
          <div className="text-center">
            <span className="text-2xl font-bold">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
            <p className="text-sm text-gray-500">Seconds</p>
          </div>
        </div>
      </div>

      <div className="flex space-x-2">
        <button className="bg-gray-100 p-2 rounded-full">
          <span className="sr-only">Previous</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button className="bg-gray-100 p-2 rounded-full">
          <span className="sr-only">Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SaleWithTimer;
