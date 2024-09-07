import React from 'react';

const SidebarItem = ({ name, link }) => {
  return (
    <li>
      <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300" href={link}>
        {name}
      </a>
    </li>
  );
}

export default SidebarItem;