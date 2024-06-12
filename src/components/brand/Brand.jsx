import './brand.css';
import { google, slack, atlassian, dropbox, shopify } from './imports';

const Brand = () => (
  <section className="brand section__padding">
    <div>
      <img src={google} alt="google logo" />
    </div>
    <div>
      <img src={slack} alt="slack logo" />
    </div>
    <div>
      <img src={atlassian} alt="atlassian logo" />
    </div>
    <div>
      <img src={dropbox} alt="dropbox logo" />
    </div>
    <div>
      <img src={shopify} alt="shopify logo" />
    </div>
  </section>
);

export default Brand;
