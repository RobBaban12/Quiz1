import React from "react";
import { showMembers } from "../utils/utils";

const Members = () => {
  return (
    <div
      className={
        "flex flex-col items-center min-h-screen gap-10 w-full text-center "
      }
      id="Whatwedo"
    >
      <div className={"mx-20"}>
        <h2>Meet the Innoventors</h2>
        <p>
          We believe in the power of technology not just as a tool, but as an
          extension of human potential to make life better, easier, and more
          connected.
        </p>
      </div>

      <div
        className={
          "hidden -z-10 md:flex items-center justify-center gap-20 px-5 w-full"
        }
      >
        {showMembers(0, -2)}
      </div>
      <div className="hidden -z-10 md:flex items-center gap-20">
        {showMembers(-2)}
      </div>
      <div className={"flex flex-col -z-10 md:hidden items-center gap-20"}>
        {showMembers(0)}
      </div>
    </div>
  );
};

export default Members;
