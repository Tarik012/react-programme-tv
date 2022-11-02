const Description = ({ titre, type, duree, direct }) => {
  return (
    <div className="description-container">
      <h1>{titre}</h1>
      <div>
        <p>{type}</p>
        <div>
          <p>{duree}</p>
          <p>{direct}</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
