import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Header } from "./components/header/Header";
import { Themes } from "./components/themes/Themes";
import { Gallery } from "./components/gallery/Gallery";
import { SupportUs } from "./components/supportus/SupportUs";
import { GalleryTwo } from "./components/galleryTwo/GalleryTwo";
import { GalleryThree } from "./components/galleryThree/GalleryThree"
import { Quote } from "./components/quote/Quote";
import { Blog } from "./components/blog/Blogs";
import { Footer } from "./components/footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Themes />
    <Gallery />
    <SupportUs />
    <GalleryTwo />
    <Quote />
    <Blog />
    <GalleryThree />
    <Footer />
  </React.StrictMode>
);
