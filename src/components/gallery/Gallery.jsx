import { ImageInformative } from "../imageInformative/ImageInformative";
import "./gallery.css";

export const Gallery = () => {
  return (
    <section className="gallery-container">
      <ImageInformative
        badgeText="MIGRANTI"
        title="Roccella Jonica, la Lampedusa che l'Italia ignora"
        avatarName="Di Alessandro Puglia"
        avatarDate="29 Giugno 2022"
        avatarImg={
          <img
            src={require("../../assets/avatarImages/g-avatar-1.png")}
            alt="avatar"
          ></img>
        }
        backgroundImg={"images/img1.png"}
      />
      <div className="grid-container">
        <div className="tile">
          <div className="gallery-img__wrapper-mobile-image">
            <img src={"images/img2.png"} alt="avatar"></img>
            <img
              className="play-button"
              src={"images/play-button.svg"}
              alt="play button"
            ></img>
          </div>
          <div className="tile-contain__comp">
            <ImageInformative
              className="gallery-img__wrapper tile-wrapper"
              badgeText="ALLARMI"
              title="Il collasso dei ghiacciai negli scatti del fotografo ambientale Fabiano Ventura"
              avatarName="Di Ugo Lombi"
              avatarDate="14 Luglio 2022"
              avatarImg={
                <img
                  src={require("../../assets/avatarImages/g-avatar-2.png")}
                  alt="avatar"
                ></img>
              }
              backgroundImg={"images/img2.png"}
              isHorizontalBannerStyle
            />
          </div>
        </div>
        <div className="tile">
          <ImageInformative
            className="tile-wrapper"
            badgeText="ESPERIMENTI"
            title="Gli startupper? Li trovi al bistrot. Così il DumBo incuba relazioni"
            avatarName="Di Diletta Grella"
            avatarDate="14 Luglio 2022"
            avatarImg={
              <img
                src={require("../../assets/avatarImages/g-avatar-3.png")}
                alt="avatar"
              ></img>
            }
            backgroundImg={"images/img3.png"}
            isHorizontalBannerStyle
          />
        </div>
        <div className="tile">
          <ImageInformative
            className="tile-wrapper"
            badgeText="UCRAINA"
            title="Nelle città italiane tutti in piazza per e con Kiev"
            avatarName="Di Anna Spena"
            avatarDate="14 Luglio 2022"
            avatarImg={
              <img
                src={require("../../assets/avatarImages/g-avatar-4.png")}
                alt="avatar"
              ></img>
            }
            backgroundImg={"images/img4.png"}
            arrowIcon="Yra"
            isHorizontalBannerStyle
          />
        </div>
      </div>
    </section>
  );
};
