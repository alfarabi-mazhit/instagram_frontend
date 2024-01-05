"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function NavigationHeader() {
  const [searchValue, SetSearchValue] = useState();
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [params, setParams] = useState();
  const openModal = (name, params) => {
    if (name === "post") {
      setIsModalPostOpen(true);
    } else if (name === "info") {
      setIsModalInfoOpen(true);
    } else return;
    setParams(params);
  };
  const closeModal = (name) => {
    if (name === "post") setIsModalPostOpen(false);
    else if (name === "info") setIsModalInfoOpen(false);
    else return;
  };
  return (
    <header>
      <div className="header-inner">
        <Link href={"/"} className="logo">
          <img src="/images/instagram.png" alt="" />
        </Link>
        <div className="search">
          <input
            id="searchInput"
            className={"search-input " + (searchValue ? "has-text" : "")}
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => SetSearchValue(e.target.value)}
          />
          <img
            className="search-input-placeholder"
            src="/images/icons/search-icon.svg"
            alt=""
            draggable="false"
          />
        </div>
        <div className="buttons">
          <Link href={"/"}>
            <img className="icon" src="/images/icons/home-icon.svg" alt="" />
          </Link>
          <img className="icon" src="/images/icons/messenger-icon.svg" alt="" />
          <img
            onClick={() => {}}
            className="icon"
            src="/images/icons/new-post-icon.svg"
            alt=""
          />
          <img
            className="icon"
            src="/images/icons/find-people-icon.svg"
            alt=""
          />
          <img
            className="icon"
            src="/images/icons/activity-feed-icon.svg"
            alt=""
          />
          <Link href={"/" + 1}>
            <img
              className="icon"
              src="/images/profile-pic-example.png"
              alt=""
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
