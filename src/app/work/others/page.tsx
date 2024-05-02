"use client";

import WorkList from "@/app/components/workList";
import { otherProjects } from "@/lib/projects";
import Image from "next/image";
import React from "react";

interface OtherProps {}

const Others = ({}: OtherProps): JSX.Element => {
  return (
    <div className="px-8 md:px-12">
      <WorkList projectList={otherProjects} />
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="animate-bounce block my-10 mx-auto"
      >
        <Image src="/to_top.svg" alt="to top arrow" width={40} height={40} />
      </button>
    </div>
  );
};

export default Others;
