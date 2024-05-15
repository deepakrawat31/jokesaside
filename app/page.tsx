import IntroSection from "./IntroSection";
import JokeSection from "./JokeSection";

export default function Home() {
   return (
      <main className="flex flex-col lg:flex-row">
         <div className="h-dvh lg:flex-1 p-4">
            <IntroSection />
         </div>
         <div className="h-dvh lg:flex-1 p-4">
            <JokeSection />
         </div>
      </main>
   );
}
