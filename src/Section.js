const Section = ({ heure, titre, type, duree, image, direct }) => {
  return (
    <>
      <div>
        <p>{heure}</p>
      </div>
      <div>
        <img src={image} alt="image programme"></img>
        <p>{titre}</p>
        <p>{type}</p>
        <p>{duree}</p>
        <p>{direct && "true"}</p>
      </div>
    </>
  );
};

export default Section;
