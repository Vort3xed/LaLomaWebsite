import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Pricing",
    path: "/pricing",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 5,
    title: "Services",
    path: "/services",
    newTab: false,
  },
  {
    id: 6,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 62,
        title: "Pricing Page",
        path: "/pricing",
        newTab: false,
      },
      {
        id: 63,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 64,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
  {
    id: 7,
    title: "Select Language",
    newTab: false,
    submenu: [
      {
        id: 71,
        title: "English",
        locale: "en",
        newTab: false,
      },
      {
        id: 72,
        title: "Spanish",
        locale: "es",
        newTab: false,
      },
      {
        id: 73,
        title: "French",
        locale: "fr",
        newTab: false,
      },
      
    ],
  },
];
export default menuData;
