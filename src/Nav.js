import React from "react";

function Nav() {
  return (
    <>
      <div className="flex justify-between flex-row bg-black text-zinc-50">
        <a className="btn-a" href="home">
          HOME
        </a>
        <a className="btn-a" href="about">
          ABOUT
        </a>
        <a className="btn-a" href="menu">
          MENU
        </a>
        <a className="btn-a" href="where">
          WHERE
        </a>
      </div>
    </>
  );
}

export default Nav;
