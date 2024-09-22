import PropTypes from "prop-types";
import styles from './Section.module.css';

function Section (props) {
  const { image, headerText, text } = props;

  function linkOnClick (event) {
    event.preventDefault();
    const element = event.target;

    console.log(`Tag name: ${element.tagName}`);
    console.log(`Header text: ${headerText}`);
    console.log(`Text: ${text}`);
  }

  return (
    <div className="max-w-sm text-left">
      <div className="border-b-4 border-red-600 inline-block">
        <img src={image} alt="" />
      </div>
      <h2 className="mt-6 font-medium text-[18px]">{headerText}</h2>
      <p className="mt-4 mb-6 text-neutral-400 leading-7 text-[14.9px]">
        {text}
      </p>
      <a className={styles.customLink} href="#" onClick={(event) => linkOnClick(event)}>READ MORE</a>
    </div>
  )
}

Section.propTypes = {
  image: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Section;
