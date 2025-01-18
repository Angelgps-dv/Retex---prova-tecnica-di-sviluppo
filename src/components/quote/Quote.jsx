import "./quote.css";
import { ReactComponent as QuoteSign } from "../../assets/quotes.svg";

export const Quote = () => {
  return (
    <section className="quote-container">
      <QuoteSign className="quote-sign" />
      <div className="quote-content">
        <div className="quote-phrase">
          <div className="quote-phrase-main">
            Essere troppo seri non è cosa molto seria
          </div>
          <div className="quote-phrase-sub">[Detto Africano]</div>
        </div>
      </div>
      <img src={require("../../assets/img9.png")} alt="quote_image" className="quote-background" />
    </section>
  );
};
