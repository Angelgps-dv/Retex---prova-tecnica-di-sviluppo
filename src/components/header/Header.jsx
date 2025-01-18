import "./header.css";
import { ReactComponent as PersonIcon } from "../../assets/person.svg";
import { ReactComponent as HamburgerIcon } from "../../assets/hamburger.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { ReactComponent as GalleryIcon } from "../../assets/gallery.svg";

export const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="task-container">
        <div className="task-container__wrapped">
          <div className="task-actions">
            <div className="task-action-item task-action-1">Contribuisci</div>
            <div className="task-action-item task-action-2">Abbonati</div>
          </div>
          <div className="task-login">
            <PersonIcon />
            Accedi
          </div>
        </div>
      </div>
      <div className="nav-container">
        <div className="nav-menu">
          <HamburgerIcon />
        </div>
        <div className="nav-search">
          <SearchIcon />
        </div>
      </div>
      <div className="themes-wrapper">
        <div className="themes-container">
          <label className="theme-selected">Tutti i Temi</label>
          <label>Ambiente</label>
          <label>Economia</label>
          <label>Mondo</label>
          <label>Non Profit</label>
          <label>Politica</label>
          <label>Societa</label>
          <label>Welfare</label>
        </div>
        <div className="gallery-icon">
          Aa
          <GalleryIcon />
        </div>
      </div>
    </header>
  );
};
