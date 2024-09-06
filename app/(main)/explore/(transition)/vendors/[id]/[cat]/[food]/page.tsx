import { ProductDetails } from "@/components/product/product-details";
import Image from "next/image";

export default function ProductDetailsPage() {
  return (
    <div className=" max-w-[585px]">
      <Image
        className="w-full h-[287px]"
        src="/bigPizza.png"
        unoptimized
        height={1000}
        width={1000}
        alt="Product_Cover_Picture"
          />
          <ProductDetails/>

      
    </div>
  );
}
