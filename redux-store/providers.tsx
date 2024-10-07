"use client";

import { Provider } from "react-redux";
/* Core */

/* Instruments */
import { store } from "./store";

export const ReduxProviders = (props: React.PropsWithChildren) => {
  return <Provider store={store}>{props.children}</Provider>;
};
