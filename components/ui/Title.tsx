import React, { FC } from "react";

interface IPROPS {
    children: string,
    addClass: any
}

const Title: FC<IPROPS> = ({ children, addClass }) => {

    return (
        <div className={`${addClass} font-dancing font-bold`}>{children}</div>
    );
};

export default Title;