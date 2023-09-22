import React from "react";
import Button from "./Button";
import "./Nav.css";
export default function Nav(props){
    return (
        <main className={props.className}>
            <div className="rounded-[100%] border-2 border-gray-300 h-[50px] w-[50px] flex justify-center items-center bg-[#191B1F]">
                <img src="../assets/profile.jpg" alt="Marly"/>
            </div>
            <span>Marly</span>
            <div>
                <ul className="flex gap-10">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Resume</a></li>
                    <li><a href="#">Testimonial</a></li>
                    <li><a href="#">Clients</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contatcs</a></li>
                </ul>
            </div>
            <div className="flex items-center">
                <div className="rounded-[100%] p-[2em] flex items-center justify-center">
                    <img src="../assets/cart.png"/>
                </div>
                <Button className="py-[1em] px-[3em] rounded-lg bg-[#202327] text-[#E2024E] buy" title="Buy Now"/>
            </div>
        </main>
    )
}