export interface NavigationType {
  name: string;
  href: string;
  current: boolean;
}

export const navigation: NavigationType[] = [
  { name: "Home", href: "#", current: true },
  { name: "Sobre", href: "#", current: false },
  { name: "Serviços", href: "#", current: false },
  { name: "Cases", href: "#", current: false },
  { name: "Blog", href: "#", current: false },
];
