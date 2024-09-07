import React, { useState } from 'react';
import SidebarItem from './SidebarItem.jsx';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const sidebarItems = [
    {
      name: 'Food List',
      link: '/FoodList',
    },
    {
      name: 'Login/Signup',
      link: '/auth',
    },
    {
      name: 'Settings',
      link: '/settings',
    },
  ];
  return (
    <>
      <div
        id="hs-offcanvas-example"
        className={`hs-overlay ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-all duration-300 transform fixed top-0 left-0 bottom-0 z-[60] w-64 bg-[#1d1212] border-r border-gray-200 pt-7 pb-10 overflow-y-auto dark:border-neutral-700`} // Dark brown background
        role="dialog"
        tabIndex="-1"
        aria-label="Sidebar"
      >
        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-3">
            {sidebarItems.map(item => (
              <li key={crypto.randomUUID()} className="text-white text-xl">
                <a
                  href={item.link}
                  className="block py-2 px-4 hover:bg-gray-700 rounded"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-[50]"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
