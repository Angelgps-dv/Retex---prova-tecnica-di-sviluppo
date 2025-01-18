import { ImageInformative } from "../imageInformative/ImageInformative";
import "./gallerytwo.css";

export const GalleryTwo = () => {
  return (
    <section>
      <div className="grid-containerx">
        <ImageInformative
          className="grid-tilex"
          badgeText="PROGETTO ARCA"
          title="“Qui Odessa”, fotografie, progetti e solidarietà"
          avatarName="Di Redazione"
          avatarDate="13 Luglio 2022"
          avatarImg={
            <img
              src={require("../../assets/avatarImages/gthree-avatar-8.png")}
              alt="avatar"
            ></img>
          }
          isHorizontalBannerStyle
        />
        <ImageInformative
          className="grid-tilex"
          badgeText="ADOLESCENTI"
          title="Storie fra ragazzi permeate di violenza. A Napoli 12enne sfregiata da 17enne"
          avatarName="Di Luca Cereda"
          avatarDate="13 Luglio 2022"
          avatarImg={
            <img
              src={require("../../assets/avatarImages/gtwo-avatar-2.png")}
              alt="avatar"
            ></img>
          }
          backgroundImg={"images/img5.png"}
          isHorizontalBannerStyle
        />
        <ImageInformative
          className="grid-tilex"
          badgeText="ECONOMIA CIVILE"
          title="“Co-agitiamo”, Tiggiano una cooperativa di comunità contro lo spopolamento"
          avatarName="Di Emiliano Moccia"
          avatarDate="12 Luglio 2022"
          avatarImg={
            <img
              src={require("../../assets/avatarImages/gtwo-avatar-3.png")}
              alt="avatar"
            ></img>
          }
          backgroundImg={"images/img6.png"}
          isHorizontalBannerStyle
        />
        <ImageInformative
          className="grid-tilex"
          badgeText="SPORT"
          title="Troppi abusi nello sport minorile, il governo interviene"
          avatarName="Di Diletta Grella"
          avatarDate="7 Luglio 2022"
          avatarImg={
            <img
              src={require("../../assets/avatarImages/gtwo-avatar-4.png")}
              alt="avatar"
            ></img>
          }
          backgroundImg={"images/img7.png"}
          isHorizontalBannerStyle
        />
        <div className="grid-tilex">
          <div className="gallery-img__wrapper-mobile-image">
            <img src={"images/img8.png"} alt="avatar"></img>
          </div>
          <ImageInformative
            className="grid-tilex"
            badgeText="SOCIETA"
            title="Donne e nuove generazioni: con loro riparte l’Italia"
            avatarName="Di Anna Spena"
            avatarDate="7 Luglio 2022"
            avatarImg={
              <img
                src={require("../../assets/avatarImages/gtwo-avatar-5.png")}
                alt="avatar"
              ></img>
            }
            backgroundImg={"images/img8.png"}
            isHorizontalBannerStyle
          />
        </div>
      </div>
    </section>
  );
};
