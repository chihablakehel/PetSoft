import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#5DC9A8] min-h-screen flex flex-col xl:flex-row justify-center items-center gap-10 ">
      <div className="mt-2 lg:mt-0">
        <Image
          src="https://bytegrad.com/course-assets/react-nextjs/petsoft-preview.png"
          alt="home-page-image"
          width={519}
          height={472}
          priority
        />
      </div>
      <div className="text-center lg:text-left ">
        <div className="flex justify-center lg:justify-start">
          <Logo />
        </div>
        <h1 className="text-5xl font-semibold my-6 max-w-[600px] lg:max-w-[500px]">
          Manage your <span className="font-extrabold">pet daycare</span> with
          ease
        </h1>
        <p className="text-2xl font-medium max-w-[600px]">
          Use PetSoft to easily keep track of pets under your care. Get liftime
          access for $299.
        </p>
        <div className="my-10 lg:mt-10 space-x-3">
          <Button asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/login">Log In</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
