import './header.css';

import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <section className="header section__padding">
      <div className="header-content">
        <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OenAI</h1>

        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence
          way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>

        <div className="header-content__input">
          <input type="email" placeholder="Your email address" />
          <button type="button">Get Started</button>
        </div>

        <div className="header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header-image">
        <img src={ai} alt="ai" />
      </div>
    </section>
  );
};

export default Header;
