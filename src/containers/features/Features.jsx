import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
];

const Features = () => {
  return (
    <div className="features section__padding" id="features">
      <div className="features-heading">
        <h2 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
        </h2>
        <p>Request Early Access to Get Started</p>
      </div>

      <div className="features-container">
        {featuresData.map((feature, index) => (
          <Feature title={feature.title} text={feature.text} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Features;
