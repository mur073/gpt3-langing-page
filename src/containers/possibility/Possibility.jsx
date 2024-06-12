import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <section className="possibility section__padding" id="possibility">
      <div className="possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="possibility-content">
        <h3>Request Early Access to Get Started</h3>
        <h2 className="gradient__text">The possibilities are beyond your imagination</h2>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence
          way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </section>
  );
};

export default Possibility;
