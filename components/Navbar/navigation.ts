export interface NavigationType {
  name: string;
  href: string;
}

export const navigation: NavigationType[] = [
  { name: "Home", href: "/" },
  { name: "Sobre", href: "#sobre" },
  { name: "Serviços", href: "#services" },
  { name: "Cases", href: "#" },
  { name: "Blog", href: "#" },
];
