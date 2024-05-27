import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 8,
    title: "About",
    newTab: false,
    submenu: [
      {
        id: 81,
        title: "About Us",
        path: "/about",
        newTab: false,
      },
      {
        id: 82,
        title: "Mission and Vision",
        path: "/mission",
        newTab: false,
      }
    ],
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 8,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 81,
        title: "Our Services",
        path: "/services/",
        newTab: false,
      },
      {
        id: 82,
        title: "Working Dogs",
        path: "/services/working-dogs",
        newTab: false,
      },
      {
        id: 83,
        title: "Pets",
        path: "/services/pets",
        newTab: false,
      },
      {
        id: 84,
        title: "Doggy Daycare",
        path: "/services/doggy-daycare",
        newTab: false,
      },
      {
        id: 85,
        title: "Hotel",
        path: "/services/hotel",
        newTab: false,
      }
    ],
  },
  {
    id: 7,
    title: "Store",
    path: "/store",
    newTab: false,
  },
  {
    id: 8,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 81,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 82,
        title: "Pricing Page",
        path: "/pricing",
        newTab: false,
      },
      {
        id: 83,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 84,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
  {
    id: 9,
    title: "Select Language",
    newTab: false,
    submenu: [
      {
        id: 91,
        title: "English",
        locale: "en",
        newTab: false,
      },
      {
        id: 92,
        title: "Spanish",
        locale: "es",
        newTab: false,
      },
      {
        id: 93,
        title: "French",
        locale: "fr",
        newTab: false,
      },
      
    ],
  },
];
export default menuData;
