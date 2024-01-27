import React, { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface IPROPS {
    children: any
}

const Layout: FC<IPROPS> = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    );
};

export default Layout;