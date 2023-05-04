import { useTheme as useNextTheme } from "next-themes";
import Image from "next/image";
import NextLink from "next/link";
import { Navbar, Link, Switch, useTheme } from "@nextui-org/react";

export default function Header() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  const menuItens = [
    {
      label: "Personagens",
      link: "/",
    },
    {
      label: "Localidades",
      link: "/locations",
    },
    {
      label: "Episódios",
      link: "/episodes",
    },
    {
      label: "Favoritos",
      link: "/favorite",
    },
  ];

  return (
    <Navbar variant="sticky">
      <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />

      <Navbar.Brand>
        <Image className="logo-nav" src="/logo.png" alt="logo" width={50} height={50} />
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        {menuItens.map((item, index) => (
          <NextLink href={item.link}>
            <Navbar.Link key={item.label} isActive>
              {item.label}
            </Navbar.Link>
          </NextLink>
        ))}
      </Navbar.Content>
      <Navbar.Content>
        {type}
        <Switch checked={isDark} onChange={(e) => setTheme(e.target.checked ? "dark" : "light")} />
      </Navbar.Content>

      <Navbar.Collapse>
        {menuItens.map((item, index) => (
          <Navbar.CollapseItem key={item.label}>
            <NextLink href={item.link}>
              <Link as="div">{item.label}</Link>
            </NextLink>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
