import './article.css';
import PropTypes from 'prop-types';

const Article = ({ imgUrl, date = 'recently', title }) => {
  return (
    <div className="article">
      <div className="article-image">
        <img src={imgUrl} alt="image" />
      </div>

      <div className="article-content">
        <div>
          <p>{date}</p>
          <h2>{title}</h2>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

Article.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
};

export default Article;
