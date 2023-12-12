"use client";
import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Button from "../Button/Button";
import Image from "next/image";
import Link from 'next/link'

import Logo from "../../public/logo-volo.svg";

import { navigation } from './navigation';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  let [isShowing, setIsShowing] = useState(false);

  return (
    <nav className="bg-neutra-50 shadow-lg fixed w-full z-20">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-center sm:justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsShowing((isShowing) => !isShowing)}
              className="relative inline-flex items-center justify-center rounded-lg p-2 text-neutra-800 focus:outline-none focus:ring-0 focus:ring-inset focus:ring-white"
            >
              <span className="absolute rounded-lg -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {isShowing ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
            <Link  href="/" className="flex flex-shrink-0 items-center">
              <Image
                className="h-8 w-auto"
                priority
                src={Logo}
                alt="Volo logo"
              />
            </Link>
          </div>
          <div className="hidden sm:flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
            <div className="sm:ml-6 sm:block">
              <div className="flex justify-center space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "border-b-2 border-semantica-1 text-semantica-1"
                        : "text-neutra-700 hover:text-neutra-900",
                      "py-0.5 font-roboto font-normal"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden sm:flex absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Button>Contato</Button>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        show={isShowing}
        enter='ease-out duration-300'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='ease-in duration-200'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <div className="sm:hidden h-[calc(100vh_-_64px)] relative">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "border-b-2 border-semantica-1 text-semantica-1"
                    : "text-neutra-700 hover:text-neutra-900",
                  "block px-3 py-2 font-roboto font-normal"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="absolute bottom-0 space-y-1 px-2 pb-3 pt-2 w-full">
            <Button className="w-full">Contato</Button>
          </div>
        </div>
      </Transition>
    </nav>
  );
}
