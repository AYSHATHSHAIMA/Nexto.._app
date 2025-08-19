"use client";

import { Provider } from "react-redux";
import { store } from "./store/store"; // create store here

export default function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
