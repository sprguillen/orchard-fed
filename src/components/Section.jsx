function Section (props) {
  const { image } = props;

  return (
    <div className="max-w-sm">
      <img src={image} alt="" />
    </div>
  )
}

export default Section;
