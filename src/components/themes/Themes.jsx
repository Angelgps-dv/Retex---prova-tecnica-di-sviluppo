import "./themes.css";
import { ReactComponent as ArrowDown } from "../../assets/arrow-down.svg";

export const Themes = () => {
  return (
    <>
      <div className="spacer"></div>
      <section className="themes-section">
        <div className="themes-section__container">
          <h1 className="themes-title">
            Tutti i temi
            <ArrowDown className="arrow-down__svg" />
          </h1>
          <div className="themes-labels">
            <label className="theme theme-1">AMBIENTE</label>
            <label className="theme theme-white">ECONOMIA</label>
            <label className="theme theme-3">MONDO</label>
            <label className="theme theme-white">NON PROFIT</label>
            <label className="theme theme-5">POLITICA</label>
            <label className="theme theme-white">SOCIETÀ</label>
            <label className="theme theme-white">WELFARE</label>
          </div>
        </div>
      </section>
    </>
  );
};
