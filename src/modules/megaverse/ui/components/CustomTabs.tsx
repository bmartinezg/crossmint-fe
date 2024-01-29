"use client";
import { Tabs, Tab } from "@nextui-org/react";

type CustomTabsProps = {
  slug: string;
};

export const CustomTabs = ({ slug }: CustomTabsProps) => {
  const tabsOptions = [
    { id: "megaverse-1", label: "Megaverse 1", to: "megaverse-1" },
    { id: "megaverse-2", label: "Megaverse 2", to: "megaverse-2" },
  ];

  return (
    <Tabs selectedKey={slug} aria-label="Tabs">
      {tabsOptions.map(({ id, label, to }) => {
        return <Tab key={id} id={`${id}`} title={label} href={to}></Tab>;
      })}
    </Tabs>
  );
};
