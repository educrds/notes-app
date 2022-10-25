import React from "react";

function Header() {
  return (
    <header>
      <h3>
        <svg
          className="addBtn"
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          viewBox="0 0 448 512"
        >
          <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H290.7c17 0 33.3-6.7 45.3-18.7L429.3 368c12-12 18.7-28.3 18.7-45.3V96c0-35.3-28.7-64-64-64H64zm0 64H384V320H320c-17.7 0-32 14.3-32 32v64H64V96z" />
        </svg>
        Notes
      </h3>
    </header>
  );
}

export default Header;
