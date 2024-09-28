import Login from "@/components/Application/Login";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="relative py-12 mx-auto max-w-5xl overflow-hidden">
      <div className="absolute inset-0 bg-gray-100 dark:bg-transparent blur-md" />
      <Login />
    </div>
  );
};

export default Page;
