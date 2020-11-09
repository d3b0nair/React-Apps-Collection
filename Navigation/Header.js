import React from "react";
import Link from "./Link";

function Header() {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Accordion
      </Link>
      <Link href="/list" className="item">
        Search
      </Link>
      <Link href="/dropdown" className="item">
        Dropdown
      </Link>
      <Link href="/translate" className="item">
        Translate
      </Link>
      <Link href="/VideoSearch" className="item">
        VideoSearch
      </Link>
      <Link href="/ImageSearch" className="item">
        ImageSearch
      </Link>
    </div>
  );
}

export default Header;
