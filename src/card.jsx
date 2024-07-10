import React from "react";
import Info from './info';
import About from './about';
import Interests from './interests';
import Footer from "./footer";

export default function card(){
    return(
        <div className="card flex-col w-80 h-vh rounded-lg m-2">
        <Info />
        <About />
        <Interests />
        <Footer />
        </div>
    )
}