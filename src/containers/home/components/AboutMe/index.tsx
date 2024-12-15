import React from "react";
import { Flex } from "antd";

export const AboutMe = () => {
  return (
    <div className="flex flex-1 justify-center items-center w-full">
      <div className="max-w-screen-xl flex-1 flex">
        <Flex gap="middle" vertical className="bg-amber-400 w-2/5">
          <span className="font-parkinsans text-xl bg-gradient-to-r from-[#0063F4] via-[#00F0AA] to-[#00F0AA] text-transparent bg-clip-text">
            Course Category
          </span>
        </Flex>
        <Flex
          wrap="wrap"
          justify="center"
          align="middle"
          className="bg-amber-500 w-3/5"
        >
          <div />
        </Flex>
      </div>
    </div>
  );
};
