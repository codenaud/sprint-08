// hero.interface.ts
export interface Hero {
  id: number;
  src: string;
  title: string;
  subtitle: string;
  link?: string; // Opcional si no todos los héroes tienen un enlace
}
