import "./supportus.css";
import { ReactComponent as ArrowRightBlack } from "../../assets/arrow-right-black.svg";

export const SupportUs = () => {
  return (
    <section className="contribute-container">
      <div className="contribute-items">
        <h1 className="contribute-title">Il tuo supporto è fondamentale</h1>
        <div className="contribute--cta">
          dai il tuo contributo <ArrowRightBlack />
        </div>
      </div>
    </section>
  );
};
