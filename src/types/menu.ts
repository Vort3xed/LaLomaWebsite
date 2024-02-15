export type Menu = {
  id: number;
  title: string;
  path?: string;
  locale?: string;
  newTab: boolean;
  submenu?: Menu[];
};
