import React, { useState, useEffect } from "react";

function Header() {
  const [activeIndex, setActiveIndex] = useState(null);
  const menu = [
    { href: "/", title: "App descriptions", icon: "comment outline red" },
    {
      href: "/translate",
      title: "Translation App",
      icon: "copy outline violet",
    },
    { href: "/wiki", title: "Wiki Search App", icon: "wikipedia w icon blue" },
    { href: "/VideoSearch", title: "Video Search App", icon: "youtube pink" },
    { href: "/ImageSearch", title: "Image Search App", icon: "image green" },
  ];
  useEffect(() => {
    const url = document.location.pathname;
    menu.map(({ href }, index) => {
      if (href === url) {
        return setActiveIndex(index);
      }
      return null;
    });
  });

  const RenderedHeader = menu.map(({ href, title, icon }, index) => {
    function onClick(evt) {
      setActiveIndex(index);
      if (evt.metaKey || evt.ctrlKey) {
        return;
      }
      evt.preventDefault();

      window.history.pushState({}, "", href);

      const navEvent = new PopStateEvent("popstate");
      window.dispatchEvent(navEvent);
    }
    const color = ["red", "violet", "blue", "pink", "green"];
    const active = index === activeIndex ? `active ${color[index]}` : "";
    return (
      <a
        key={index}
        onClick={onClick}
        index={index}
        href={href}
        className={`link item ${active}`}
      >
        <i className={`${icon} icon`}></i>
        {title}
      </a>
    );
  });

  return (
    
    <div className="ui container column">
      <div className="ui tabular fluid three item stackable menu">{RenderedHeader}</div>
    </div>
  );
}

export default Header;
