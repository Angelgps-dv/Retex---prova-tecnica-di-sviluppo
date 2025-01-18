import "./gallerythree.css";
import { ImageInformative } from "../imageInformative/ImageInformative";

export const GalleryThree = () => {
  return (
    <section className="gallery-collection">
      <div>
        <div className="gallery-img__wrapper-mobile-image">
          <img src={"images/gthree-1.png"} alt="avatar"></img>
          <img className="play-button" src={"images/play-button.svg"} alt="play button"></img>
        </div>
        <ImageInformative
          className="gallery-img__wrapper"
          badgeText="IMPRESA SOCIALE"
          title="La Kasbah mazarese nella quale si gusta la cultura araba"
          avatarName="Di Giovanni Gavardi"
          avatarDate="3 Luglio 2022"
          avatarImg={
            <img
              src={require("../../assets/avatarImages/gthree-avatar-6.png")}
              alt="avatar"
            ></img>
          }
          backgroundImg={"images/gthree-1.png"}
          isHorizontalBannerStyle
        />
      </div>
      <div className="gallery-summary">
        <ImageInformative
          className="gallery-summary__item"
          badgeText="SPONSORED"
          title="Sostenibilità sociale: accordo tra Dynamo Academy e Acsi"
          avatarName="Di Dynamo Academy"
          avatarImg={
            <img
              src={require("../../assets/avatarImages/gthree-avatar-7.png")}
              alt="avatar"
            ></img>
          }
          isHorizontalBannerStyle
        />
        <ImageInformative
          className="gallery-summary__item"
          badgeText="PERSONE"
          title="Uccisa ad Haiti suor Luisa, era l'angelo dei bambini"
          avatarName="Di Lucia Capuzzi"
          avatarDate="1 Luglio 2022"
          avatarImg={
            <img
              src={require("../../assets/avatarImages/gthree-avatar-9.png")}
              alt="avatar"
            ></img>
          }
          backgroundImg={"images/gthree-2.png"}
          isHorizontalBannerStyle
        />
        <ImageInformative
          className="gallery-summary__item"
          badgeText="NETWORKING"
          title="Il fundraising in rotta verso Giardini-Naxos"
          avatarName="Di Redazione"
          avatarDate="1 Luglio 2022"
          avatarImg={
            <img
              src={require("../../assets/avatarImages/gthree-avatar-8.png")}
              alt="avatar"
            ></img>
          }
          isHorizontalBannerStyle
        />
        <ImageInformative
          className="gallery-summary__item"
          badgeText="SOCIETA' CIVILE"
          title="Lisa, il modello Croce Rossa per l'inclusione lavorativa"
          avatarName="Di Francesco Palazzo"
          avatarDate="29 Giugno 2022"
          avatarImg={
            <img
              src={require("../../assets/avatarImages/gthree-avatar-10.png")}
              alt="avatar"
            ></img>
          }
          backgroundImg={"images/gthree-3.png"}
          isHorizontalBannerStyle
        />
      </div>
      <div className="gallery-collection__end">
        <div className="gallery-contain">
          <ImageInformative
            badgeText="Innovazione"
            title="Gli anziani del Sicomoro spopolano su TikTok"
            avatarName="Di Luigi Alfonso"
            avatarDate="1 Luglio 2022"
            bannerStyle="banner"
            backgroundImg={"images/gthree-4.png"}
            avatarImg={
              <img
                src={require("../../assets/avatarImages/gthree-avatar-1.png")}
                alt="background"
              />
            }
            isBannerStyle
          />
          <ImageInformative
            badgeText="Disabilità"
            title="Emergenza sordi: quando un'app ti salva la vita"
            avatarName="Di Sara Bellingeri"
            avatarDate="1 Luglio 2022"
            bannerStyle="banner"
            backgroundImg={"images/gthree-5.png"}
            avatarImg={
              <img
                src={require("../../assets/avatarImages/gthree-avatar-2.png")}
                alt="background"
              />
            }
            isBannerStyle
          />
          <ImageInformative
            badgeText="Traiettorie"
            title="Diego, il fruttivendolo che ha scelto la cooperazione sociale"
            avatarName="Di Giampaolo Cerri"
            avatarDate="1 Luglio 2022"
            bannerStyle="banner"
            backgroundImg={"images/gthree-6.png"}
            avatarImg={
              <img
                src={require("../../assets/avatarImages/gthree-avatar-3.png")}
                alt="background"
              />
            }
            isBannerStyle
          />
          <ImageInformative
            badgeText="Sociale"
            title="Pedalare `Sicily Coast to Coast` per essere più inclusivi"
            avatarName="Di Giovanni Gamba"
            avatarDate="1 Luglio 2022"
            bannerStyle="banner"
            backgroundImg={"images/gthree-7.png"}
            avatarImg={
              <img
                src={require("../../assets/avatarImages/gthree-avatar-4.png")}
                alt="background"
              />
            }
            isBannerStyle
          />
        </div>
        <div className="gallery-end-image">
          <ImageInformative
            className="gallery-end-image_2"
            badgeText="Ucraina"
            title="Leopoli, andata + ritorno"
            avatarName="Di Gilda Sciortino"
            avatarDate="14 Luglio 2022"
            bannerStyle="banner"
            backgroundImg={"images/gthree-8.png"}
            avatarImg={
              <img
                src={require("../../assets/avatarImages/gthree-avatar-5.png")}
                alt="background"
              />
            }
            isBannerStyle
          />
        </div>
      </div>
    </section>
  );
};
