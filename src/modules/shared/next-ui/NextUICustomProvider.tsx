"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";

type NextUICustomProviderProps = {
  children: React.ReactNode;
};

export const NextUICustomProvider = ({ children }: NextUICustomProviderProps) => (
  <NextUIProvider>{children}</NextUIProvider>
);
