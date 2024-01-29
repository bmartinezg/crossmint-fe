"use client";
import { Tabs, Tab } from "@nextui-org/react";

type CustomTabsProps = {
  path: string;
};

export const CustomTabs = ({ path }: CustomTabsProps) => {
  const tabsOptions = [
    { id: "megaverse-1", label: "Megaverse 1", to: "megaverse-1" },
    { id: "megaverse-2", label: "Megaverse 2", to: "megaverse-2" },
  ];

  return (
    <Tabs selectedKey={path} aria-label="Tabs">
      {tabsOptions.map(({ id, label, to }) => {
        return <Tab key={id} id={`${id}`} title={label} href={to}></Tab>;
      })}
    </Tabs>
  );
};
