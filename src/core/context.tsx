import React from "react";
import { OsmiContextInstance } from "../types/osmi.types";

export const OsmiContext = React.createContext<OsmiContextInstance | null>(
  null
);
