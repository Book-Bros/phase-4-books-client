import React from "react";
import Navbar from "../navbar/Navbar";
import './style/home.css'


export default function Home() {


    return (
        <div className="homediv">
            <Navbar />
            <section class="wrapper">
  <div class="top">Books</div>
  <div class="bottom" aria-hidden="true">Books</div>
</section>
        </div>
    )
}
