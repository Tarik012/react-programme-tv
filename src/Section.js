import Picture from "./Picture";
import Description from "./Description";

const Section = ({ heure, titre, type, duree, image, direct, className }) => {
  return (
    <>
      <div>
        <p>{heure}</p>
      </div>
      <div className={className}>
        <Picture image={image} />
        <Description
          titre={titre}
          type={type}
          duree={duree}
          direct={direct && "true"}
        />
      </div>
    </>
  );
};

export default Section;
