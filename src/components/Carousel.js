const Carousel = (props) => {
  return (
    <div>
      {props.data.map((competition, index) => {
        return <div key={index}>{competition.title}</div>;
      })}
    </div>
  );
};

export default Carousel;
