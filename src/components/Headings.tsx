import React from "react";

interface HeadingsProps {
  heading1: string;
  heading2: string;
}

const Headings: React.FC<HeadingsProps> = ({ heading1, heading2 }) => {
  return (
    <div>
      <div className="flex py-5">
        <span className="bg-red-500 h-6 w-4 rounded mr-2"></span>
        <h3 className="text-red-500 font-bold">{heading1}</h3>
      </div>
      <h1 className="text-3xl font-bold">{heading2}</h1>
    </div>
  );
};

export default Headings;
