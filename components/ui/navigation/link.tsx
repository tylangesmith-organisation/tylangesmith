import React from "react";
import Link from "next/link";

export interface Props {
  children: string;
  href: string;
}

const Component = (props: Props) => {
  const { children, href } = props;

  return (
    <Link href={href}>
      <a className="ml-4 md:ml-6 lg:ml-8 text-lg text-gray-900">{children}</a>
    </Link>
  );
};

export default Component;
