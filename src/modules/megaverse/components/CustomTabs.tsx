"use client";
import { Tabs, Tab } from "@nextui-org/react";

type CustomTabsProps = {
  path: string;
};

export const CustomTabs = ({ path }: CustomTabsProps) => {
  const tabsOptions = [
    { id: "challenge-1", label: "Megaverse Challenge 1", to: "challenge-1" },
    { id: "challenge-2", label: "Megaverse Challenge 2", to: "challenge-2" },
  ];

  return (
    <Tabs selectedKey={path} aria-label="Tabs">
      {tabsOptions.map(({ id, label, to }) => {
        return <Tab key={id} id={`${id}`} title={label} href={to}></Tab>;
      })}
    </Tabs>
  );
};
