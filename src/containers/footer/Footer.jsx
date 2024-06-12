import './footer.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <section className="footer section__padding">
      <div className="footer-heading">
        <h2 className="gradient__text">Do you want to step in to the future before others</h2>
        <button type="button">Request Early Access</button>
      </div>

      <div className="footer-links">
        <div className="footer-links_logo">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer-links_div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>@2021 GPT-3. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
