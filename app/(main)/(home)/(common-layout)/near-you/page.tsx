import { BackButton } from "@/components/back-button";
import InnerHeader from "@/components/inner-page-header-mobile";
import { RatingStar, RatingStarFilled } from "@/components/ui/icons";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vendors Near you",
  description: "Vendors Near you",
};

const dummyVendors = [
  {
    image: "/handpicked/1.png",
    logo: "/vendors/kinimajaro.png",
    name: "Kinimajaro Restaurant",
    distance: "5mins away",
    stars: "4.5",
  },
  {
    image: "/handpicked/2.png",
    logo: "/vendors/hardy-foods.png",
    name: "Hardy Square",
    distance: "20mins away",
    stars: "5.0",
  },
  {
    image: "/handpicked/3.png",
    logo: "/vendors/marketSquare.png",
    name: "Market Square",
    distance: "15mins away",
    stars: "3.5",
  },
  {
    image: "/handpicked/4.png",
    logo: "/vendors/dominos.png",
    name: "Dominos Pizza",
    distance: "30mins away",
    stars: "2.5",
  },
  {
    image: "/handpicked/5.png",
    logo: "/vendors/chicken-repubilc.png",
    name: "Chicken Republic",
    distance: "10mins away",
    stars: "4.5",
  },
];
export default async function NearYouPage() {
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  return (
    <div className="bg-white min-h-screen lg:bg-transparent">
      <div className="bg-white py-3 px-6 mt-[57px] md:mt-0 lg:mb-4 lg:rounded-xl items-center gap-2 hidden lg:flex">
        <BackButton />
        <span className="text-lg text-[#1E1E1E] font-bold tracking-[-0.4px]">
          Near you
        </span>
      </div>

      <InnerHeader text="Near you" className="block lg:hidden" />

      <div className="bg-white lg:rounded-xl p-6 pb-[125px] lg:pb-6">
        <div className="grid grid-cols-1 sm500:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6">
          {dummyVendors.map((item, index) => (
            <VendorsCards
              key={index}
              image={item.image}
              logo={item.logo}
              name={item.name}
              distance={item.distance}
              stars={item.stars}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface IVendorsCards {
  image: string;
  logo: string;
  name: string;
  distance: string;
  stars: string;
}

const VendorsCards = ({
  image,
  logo,
  name,
  distance,
  stars,
}: IVendorsCards) => {
  return (
    <Link href="/vendors" className="space-y-4 cursor-pointer">
      <Image
        src={image}
        width={1000}
        height={1000}
        quality={100}
        alt="Vendors Image"
        className="w-full h-auto max-h-[120px] object-cover rounded-md"
      />

      <div className="flex gap-3 text-sm items-center text-[#1e1e1e] ">
        <Image
          src={logo}
          width={1000}
          height={1000}
          quality={100}
          alt="Vendors Logo"
          className="w-[56px] h-[56px] rounded-full object-cover"
        />

        <div className="space-y-1.5 w-full">
          <p className="font-bold">{name}</p>
          <div className="flex gap-6 lg:justify-between w-full">
            <p>{distance}</p>

            <p className="flex items-center gap-0.5">
              {stars} <RatingStarFilled className="w-5 h-5" />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
