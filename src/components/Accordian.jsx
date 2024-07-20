import React, { useState } from 'react';
import clsx from 'clsx';
import ArrowIcon from '../assets/ArrowIcon';

const Accordian = ({ items, className, ...props }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
      <div
        className={clsx(
          "w-full max-w-lg mx-auto border border-[#d9d9d9] rounded-md",
          className
        )}
      >
        {items.map((item, index) => (
          <div key={index} className="">
            <button
              className="w-full p-4 text-left"
              onClick={() => handleToggle(index)}
            >
              <div className="flex justify-between items-center border-2">
                <div className="flex flex-row gap-2 items-center ">
                  <div
                    className={clsx(
                      "w-6 h-6 flex-shrink-0 rounded-full transition-colors",
                      {
                        "bg-[purple]": index === activeIndex,
                        "bg-[#D19DE2]": index !== activeIndex,
                      }
                    )}
                  />
                  <span className="text-lg font-medium text-gray-900">
                    {item.question}
                  </span>
                </div>
                <span
                  className={clsx("text-lg font-medium", {
                    "text-[purple]": index === activeIndex,
                    "text-[#D19DE2]": index !== activeIndex,
                  })}
                >
                  <ArrowIcon
                    className={clsx("transform transition-transform", {
                      "rotate-180": index === activeIndex,
                      "rotate-90": index !== activeIndex,
                    })}
                  />
                </span>
              </div>
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-gray-50">
                <p className="text-gray-700">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
};

export default Accordian;
