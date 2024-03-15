import axios from "axios";
import React from "react";
import OfferList from "./OfferList";
import Image from "next/image";

interface PricingBoxProps {
  price: any;
  purchaseLink: string;
  packageName: string;
  btn: string;
  popular?: boolean;
  subtitle: string;
  children: React.ReactNode;
}

const PricingBox = ({ product, cost, imageUrl, type }) => {

  // POST request
  // const handleSubscription = async (e) => {
  //   e.preventDefault();
  //   const { data } = await axios.post(
  //     "/api/payment",
  //     {
  //       priceId: product.id,
  //     },
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     },
  //   );
  //   window.location.assign(data);
  // };

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div
        className="relative z-10 overflow-hidden rounded-xl bg-white px-4 py-2 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] dark:bg-dark-2 sm:p-8 lg:px-5 lg:py-10 xl:p-14"
        data-wow-delay=".1s"
      >
        <div className="flex items-center ">
          <h1 className="text-2xl font-semibold text-dark dark:text-white">{product}</h1>
          {type === "Premium" && (
            <p className="absolute right-[-50px] top-[60px] inline-block -rotate-90 rounded-bl-md rounded-tl-md bg-primary px-5 py-2 text-base font-medium text-white">
              Recommended
            </p>
          )}
          <h2 className="text-3xl pl-8 font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">
            <span className="text-2xl font-medium">$ </span>
            <span className="-ml-1 -tracking-[2px]">
              {(cost / 100).toLocaleString("en-US", {
                currency: "USD",
              })}
            </span>
          </h2>
        </div>
        <span className="flex mb-5 block text-xl font-medium text-dark dark:text-white">
          {product.nickname}

        </span>

        <Image src={imageUrl} className="bold rounded-lg" alt="product" width={500} height={500} />

        <div className="pt-5 mb-[30px]">
          <h3 className="mb-5 text-lg font-medium text-dark dark:text-white">
            Description
          </h3>
          <p className="text-base text-body-color dark:text-dark-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>


      </div>

    </div>
  );
};

export default PricingBox;
