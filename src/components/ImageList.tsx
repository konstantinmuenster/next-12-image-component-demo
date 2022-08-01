import { ReactNode } from "react";

export const ImageList = (props: { children?: ReactNode }) => {
  return <div className="flex flex-col gap-y-10">{props.children}</div>;
};
