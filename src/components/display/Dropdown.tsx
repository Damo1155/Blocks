import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

// Types
import { DropdownProps } from '../../types/display/dropdown';

export const Dropdown = ({ id, label, options, placement }: DropdownProps) => (
  <Menu as="div">
    <MenuButton as="button">{label}</MenuButton>

    <MenuItems as="ul" anchor={placement}>
      {(options ?? []).map((children, index) => (
        <MenuItem as="li" key={`dropdown-${id}-${index + 1}`}>
          {children}
        </MenuItem>
      ))}
    </MenuItems>
  </Menu>
);
