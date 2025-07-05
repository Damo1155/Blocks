'use client';

import classNames from 'classnames';
import React, { useState } from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

// Types
import { TabsProps } from '../../types/display/tabs';

export const Tabs = ({ tabs }: TabsProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <TabGroup
      as="div"
      className="tabs"
      onChange={setSelectedIndex}
      selectedIndex={selectedIndex}
    >
      <TabList>
        {tabs.map(({ id, hideLabel, label, disabled }, index) => (
          <Tab
            key={`tab-${id}`}
            disabled={disabled}
            className={classNames({
              active: selectedIndex === index,
            })}
          >
            {/* TODO  : Allow for an icon to be set here */}
            <span className={classNames({ 'sr-only': hideLabel })}>
              {label}
            </span>
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map(({ id, panel }) => (
          <TabPanel key={`tabpanel-${id}`}>{panel}</TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};
