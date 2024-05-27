import About from "@/components/Facility";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "La Loma",
  description: "All the dog care you could ever need",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="Our Mission and Vision" />
      <About />
      <Team />
    </main>
  );
};

export default AboutPage;