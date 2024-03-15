import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Pricing from "@/components/Pricing";
import StoreItems from "@/components/StoreItems";

export const metadata: Metadata = {
  title: "La Loma",
  description: "All the dog care you could ever need",
};

const StorePage = () => {
  return (
    <>
      <Breadcrumb pageName="Store" />

      <Pricing />
      <StoreItems />
    </>
  );
};

export default StorePage;
