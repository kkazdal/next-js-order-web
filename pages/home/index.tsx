import About from "@/components/About";
import Campaigns from "@/components/Campaigns";
import Carousel from "@/components/Carousel";
import Reservation from "@/components/Reservation";
import Customers from "@/components/customers/Customers";
import MenuWrapper from "@/components/product/MenuWrapper";

const Index = () => {
    return (
        <div className="">
            <Carousel />
            <Campaigns />
            <MenuWrapper />
            <About />
            <Reservation />
            <Customers />
        </div>
    );
}

export default Index;