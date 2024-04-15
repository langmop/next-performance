import SearchForm from "@/components/SearchForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-ful flex-col rounded-xl text-center">
          <Image
            priority
            loading="eager"
            layout="fill"
            src="/jsm_resources_banner.svg"
            alt="JavaScript Mastery Resource"
          />
          <h1 className="z-20 sm:heading1 heading2 mb-6 text-center text-white">
            JavaScript Mastery Resource{" "}
          </h1>
        </div>
        <SearchForm />
      </section>
    </main>
  );
}
