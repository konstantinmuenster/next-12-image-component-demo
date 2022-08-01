import { ReactNode } from "react";

export const Page = (props: { children?: ReactNode }) => {
  return (
    <main className="w-full max-w-3xl mx-auto my-20 px-4">
      {props.children}
    </main>
  );
};
