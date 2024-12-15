import React from "react";
import { Flex } from "antd";

export const Categories = () => {
  return (
    <div className="flex-1 flex justify-center items-center w-full">
      <div className="max-w-screen-xl flex-1 py-[110px]">
        <Flex gap="middle" vertical>
          <span className="font-parkinsans text-xl bg-gradient-to-r from-[#0063F4] via-[#00F0AA] to-[#00F0AA] text-transparent bg-clip-text">
            Course Category
          </span>
          <span className="font-varela text-[3rem]">
            Explore Top
            <span className="text-[3rem] bg-gradient-to-r from-[#0063F4] via-[#00F0AA] to-[#00F0AA] text-transparent bg-clip-text">
              {" Categories"}
            </span>
          </span>
        </Flex>
        <Flex wrap="wrap" justify="center" align="middle">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-60 w-56 m-4 rounded-lg shadow-lg flex justify-center items-center transition-transform duration-600 hover:translate-y-[-6px] animate-slideUp"
              style={{
                backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}33`,
                flexBasis: "calc(33.33% - 2rem)",
              }}
            >
              <span className="font-parkinsans font-semibold text-[1rem] mt-[10px]">
                Card {index + 1}
              </span>
            </div>
          ))}
        </Flex>
      </div>
    </div>
  );
};
