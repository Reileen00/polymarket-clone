import { InputDemo } from "@/components/upnavbar";
import { NavigationMenuDemo } from "../components/navbar";
import HeroPage from "@/components/herosection";

export default function Home() {
  return (
    <main className="w-full flex justify-center">
      {/* Global centered column */}
      <div className="w-full max-w-[1330px] px-4">
        <InputDemo />
        <NavigationMenuDemo />
        <HeroPage />
      </div>
    </main>
  );
}
