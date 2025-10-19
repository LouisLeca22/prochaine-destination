import Favorites from "@/components/Home/Favorites";
import Header from "@/components/Home/Header";
import Headlines from "@/components/Home/Headlines";
import Targets from "@/components/Home/Targets";



export default async function Home() {
  return (
    <main >
      <Header />
      <Headlines />
      <Favorites />
      <Targets />
    </main>
  );
}
