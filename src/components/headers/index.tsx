"use client";

import { IconLeftSmall, Logo } from "@public";
import Image from "next/image";
import React from "react";
import { Button } from "antd";

interface Props {
  children?: React.ReactNode;
}

const NavItem = ["Home", "Profile", "Project", "Technology", "Contact"];

export const Header: React.FC<Props> = () => {
  return (
    <div className="flex items-center justify-center px-4 w-full top-0 right-0 h-[100] absolute">
      <div className="max-w-screen-xl flex justify-between w-full">
        <Image src={Logo} alt={"Logo"} width={193} height={60} />
        <div className="flex-[2] border-y-green-900 w-full flex justify-end gap-8">
          {NavItem.map((item, index) => (
            <nav
              key={index}
              className="flex justify-center items-center font-sans text-lg cursor-pointer"
            >
              {item}
            </nav>
          ))}
        </div>
        <div className="flex flex-1 justify-end items-center w-full">
          <Button
            type="primary"
            icon={
              <Image src={IconLeftSmall} alt={"Icon"} width={30} height={16} />
            }
            iconPosition={"end"}
            className={"h-[60] px-16 bg-[#070707]"}
          >
            {"Start view"}
          </Button>
        </div>
      </div>
    </div>
  );
};
