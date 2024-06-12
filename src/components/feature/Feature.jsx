import './feature.css';
import PropTypes from 'prop-types';

const Feature = ({ title, text }) => {
  return (
    <div className="features-container__feature">
      <div className="features-container__feauture-title">
        <div />
        <h3>{title}</h3>
      </div>
      <div className="features-container__feauture-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Feature;
