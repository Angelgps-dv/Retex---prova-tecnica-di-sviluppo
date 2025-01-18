import "./blog.css";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right-black.svg";

export const Blog = () => {
  return (
    <section className="blog-container">
      <h1 className="blog-title">Il Blog</h1>
      <div className="blog-profile">
        <img src={require("../../assets/blog-1.png")} alt="blog_img1" />
        <div className="blog-profile__descriptions">
          <div className="blog-profile__description--title">
            Il Becco dell'oca
          </div>
          <div className="blog-profile__description--subtitle">
            Di Paolo dell'oca
          </div>
        </div>
      </div>
      <div className="blog-profile">
        <img src={require("../../assets/blog-2.png")} alt="blog_img1" />
        <div className="blog-profile__descriptions">
          <div className="blog-profile__description--title">Disarmato</div>
          <div className="blog-profile__description--subtitle">
            Di Pasquale Pugliese
          </div>
        </div>
      </div>
      <div className="blog-profile">
        <img src={require("../../assets/blog-3.png")} alt="blog_img1" />
        <div className="blog-profile__descriptions">
          <div className="blog-profile__description--title">
            Battitiperminuto
          </div>
          <div className="blog-profile__description--subtitle">
            Di Lorenzo Maria Alvaro
          </div>
        </div>
      </div>
      <div className="blog-profile">
        <img src={require("../../assets/blog-4.png")} alt="blog_img1" />
        <div className="blog-profile__descriptions">
          <div className="blog-profile__description--title">La Zanzarella</div>
          <div className="blog-profile__description--subtitle">
            Di Elena Zanella
          </div>
        </div>
      </div>
      <div className="blog-profile">
        <img src={require("../../assets/blog-5.png")} alt="blog_img1" />
        <div className="blog-profile__descriptions">
          <div className="blog-profile__description--title">Impact Q&A</div>
          <div className="blog-profile__description--subtitle">
            Di Laura Orestano
          </div>
        </div>
      </div>
      <div className="blog-profiles-container">
        <div className="blog-profiles-wrapper">
          <h1 className="blog-profiles-wrapper--title">Tutti i blog</h1>
          <ArrowRight className="blog-profiles-wrapper--cta"/>
        </div>
      </div>
    </section>
  );
};
