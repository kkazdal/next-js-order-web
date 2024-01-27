
import Home from "./home";
import Reservation from "@/components/Reservation";
import Footer from "@/components/layout/Layout";
import Header from "@/components/layout/header";

export default function Index() {
  return (
    <div
      className={`flex min-h-screen flex-col`}>
      <Header/>
      <Home />
      <Footer />
    </div>
  );
}
