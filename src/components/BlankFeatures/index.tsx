import SectionTitle from "../Common/SectionTitle";


const BlankFeatures = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="Services"
          title="Our Services"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        />
        <a
          href="/#"
          className="inline-flex items-center justify-center rounded-md bg-tertiary px-7 py-3 mt-3 text-center text-base font-medium text-white duration-300 hover:bg-primary/90"
        >
          blankFeatures.buttonText
        </a>
      </div>
    </section>
  );
};

export default BlankFeatures;
