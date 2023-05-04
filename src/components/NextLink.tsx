import Link from "next/link";
import type { LinkProps } from "next/link";

type NextLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export default function NextLink(props: NextLinkProps) {
  return <Link {...props}>{props.children} </Link>;
}
