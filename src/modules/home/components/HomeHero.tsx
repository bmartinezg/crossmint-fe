import Image from "next/image";
import { HomeHeroActions } from "@/modules/home/components/HomeHeroActions";

export const HomeHero = () => (
  <section className="container h-screen text-center flex flex-col items-center justify-center">
    <div className="mb-8 flex flex-col items-center">
      <figure className="mb-4">
        <Image src="/images/profile-photo.png" alt="profile photo" height={300} width={300} />
      </figure>
      <h1 className="text-xl md:text-3xl lg:text-5xl">Bruno Martínez González</h1>
      <p className="text-xl">Frontend developer based in Madrid</p>
    </div>
    <HomeHeroActions />
  </section>
);
