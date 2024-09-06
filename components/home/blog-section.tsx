import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { WhiteCard } from "@/components/white-card";
import { BlogItem } from "@/components/blog/blog-item";
import { HomeTitle } from "./home-title";
export const BlogSection = () => {
  return (
    <WhiteCard asChild>
      <section>
        <HomeTitle title=" What You Should Know" className=" mb-6 sm:mb-16">
          From The Community
        </HomeTitle>
        <div>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-x-[22px] gap-y-5 md:gap-x-14 sm:gap-y-10 lg:gap-x-16 ">
            <li>
              <BlogItem data={""} />
              
            </li>
            <li>
              <BlogItem data={""} />
            </li>
            <li>
              <BlogItem data={""} />
            </li>
            <li>
              <BlogItem data={""} />
            </li>
          </ul>
          <div className="mt-6 md:mt-12 flex justify-end">
            <Link href={"/blogs"} className="text-xs sm:text-xl lg:text-2xl">
              Read More {'>'}
            </Link>
          </div>
        </div>
      </section>
    </WhiteCard>
  );
};
