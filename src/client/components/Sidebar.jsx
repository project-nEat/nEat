import React from 'react';
import SidebarItem from './SidebarItem.jsx';

const Sidebar = () => {
  const sidebarItems = [
    {
      name: "Food List",
      link: "/FoodList"
    },
    {
      name: "Login/Signup",
      link: "/auth"
    },
    {
      name: "Settings",
      link: "/settings"
    },
  ]
  return (
    <div id="hs-offcanvas-example" className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-800 dark:border-neutral-700" role="dialog" tabIndex="-1" aria-label="Sidebar">
      <div className="px-6">
        nEat
      </div>
      <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
        <ul className="space-y-1.5">
          {sidebarItems.map((item) => (
            <SidebarItem
              name={item.name}
              link={item.link}
              key={crypto.randomUUID()}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;