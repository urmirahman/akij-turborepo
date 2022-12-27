import Image from "next/image";
import type { ReactNode } from "react";
import { useRef } from "react";

import { Styled } from "./Header.styled";

export type HeaderProps = {
  resetStateWatchValue: string;

  skipLinkText: string;

  openBurgerMenuButtonAriaLabel: string;
  closeBurgerMenuButtonAriaLabel: string;

  notificationsAria?: string;
  notificationFeatures?: ReactNode;

  signOut: () => void;
  isSignedIn: boolean;

  onMenuVisibilityChange: (
    level: 1 | 2,
    isNowVisible: boolean,
    buttonText: string
  ) => void;
  onLinkClick: (
    menuLevel: 1 | 2 | 3 | string,
    linkText: string,
    linkUrl: string
  ) => void;
};

export function Header() {
  const headerRef = useRef<HTMLElement>(null);

  return (
    <Styled.Header data-testid="Header" ref={headerRef}>
      <nav className="navbar navbar-expand-lg relative flex w-full items-center justify-between bg-white py-2 shadow-md">
        <div className="flex w-full flex-wrap items-center justify-between px-6">
          <div className="flex items-center">
            <button
              className="navbar-toggler mr-2 border-0 bg-transparent py-3 text-xl leading-none text-gray-600 transition-shadow duration-150 ease-in-out hover:text-gray-700 focus:text-gray-700 lg:hidden"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContentY"
              aria-controls="navbarSupportedContentY"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                className="w-5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                ></path>
              </svg>
            </button>
            <a className="navbar-brand text-blue-600" href="#!">
              <img
                src={"https://www.akijfood.com/public/assets/img/logo.png"}
                className="h-[100] w-[100px] rounded-lg shadow-lg"
                alt={"logo"}
              />
            </a>
          </div>
          <div
            className="navbar-collapse collapse grow items-center"
            id="navbarSupportedContentY"
          >
            <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
              <li className="nav-item">
                <a
                  className="nav-link block py-2 pr-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-700 focus:text-gray-700 lg:px-2"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link block py-2 pr-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-700 focus:text-gray-700 lg:px-2"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Team
                </a>
              </li>
              <li className="nav-item mb-2 lg:mb-0">
                <a
                  className="nav-link block py-2 pr-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-700 focus:text-gray-700 lg:px-2"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center lg:ml-auto">
            <button
              type="button"
              className="mr-2 inline-block rounded bg-transparent px-6 py-2.5 text-xs font-medium uppercase leading-tight text-blue-600 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Login
            </button>
            <button
              type="button"
              className="inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Sign up for free
            </button>
          </div>
        </div>
      </nav>
    </Styled.Header>
  );
}
