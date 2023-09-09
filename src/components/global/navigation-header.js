"use client";
import { useEffect } from "react";
export default function NavigationHeader() {
  useEffect(() => {
    const input = document.getElementById("searchInput");
    input.addEventListener("input", function () {
      if (input.value.trim() !== "") {
        input.classList.add("has-text");
      } else {
        input.classList.remove("has-text");
      }
    });
  }, []);
  return (
    <header>
      <div className="header-inner">
        <div className="logo">
          <img src="/images/instagram.png" alt="" />
        </div>
        <div className="search">
          <form className="search-form" action="" method="get">
            <input
              id="searchInput"
              className="search-input"
              type="text"
              placeholder="Search"
            />
            <img
              className="search-input-placeholder"
              src="/images/icons/search-icon.svg"
              alt=""
              draggable="false"
            />
          </form>
        </div>
        <div className="buttons">
          <a>
            <img src="/images/icons/home-icon.svg" alt="" />
          </a>
          <a>
            <img src="/images/icons/messenger-icon.svg" alt="" />
          </a>
          <a>
            <img src="/images/icons/new-post-icon.svg" alt="" />
          </a>
          <a>
            <img src="/images/icons/find-people-icon.svg" alt="" />
          </a>
          <a>
            <img src="/images/icons/activity-feed-icon.svg" alt="" />
          </a>
          <a>
            <img src="/images/profile-pic-example.png" alt="" />
          </a>
        </div>
      </div>
    </header>
  );
}
