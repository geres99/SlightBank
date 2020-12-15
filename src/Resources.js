import React from "react";
import Core from "./Core/Core";

function Resources() {
  let [images, setImages] = React.useState([]);
  let [icons, setIcons] = React.useState([]);

  let showTextImages = () => {
    if (images.length === 0) {
      setImages(["x"]);
    } else {
      setImages([]);
    }
  };

  let showTextIcons = () => {
    if (icons.length === 0) {
      setIcons(["x"]);
    } else {
      setIcons([]);
    }
  };

  let buttonStyle = (x) => {
    if (x.length === 0) {
      return (
        <img
          height="30px"
          className="nadropdown"
          src={process.env.PUBLIC_URL + "/Images/drop-down-noactive.svg"}
          alt=""
        ></img>
      );
    }
    return (
      <img
        height="30px"
        className="nadropdown"
        src={process.env.PUBLIC_URL + "/Images/drop-down-active.svg"}
        alt=""
      ></img>
    );
  };

  return (
    <div>
      <Core />
      <button className="showButton" onClick={showTextImages}>
        {buttonStyle(images)}
        Images used:
      </button>
      {images.map((x) => (
        <div>
          <div className="bigText">Images used:</div>
          <div className="smallText">
            <div>
              <div>Zdjęcie autorstwa Artem Beliaikin z Pexels</div>
              <div className="littleMargins">
                Zdjęcie autorstwa Vlada Karpovich z Pexels
              </div>
              <div className="littleMargins">
                Zdjęcie autorstwa Pixabay z Pexels
              </div>
            </div>
          </div>
        </div>
      ))}
      <button className="showButton" onClick={showTextIcons}>
        {buttonStyle(icons)}
        Icons used:
      </button>
      {icons.map((x) => (
        <div>
          <div className="bigText">Icons used:</div>
          <div className="smallText">
            <div>
              <div>
                Icons made by{" "}
                <a
                  href="https://www.flaticon.com/authors/google"
                  title="Google"
                >
                  Google
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>
              </div>
              <div className="littleMargins">
                Icons made by{" "}
                <a
                  href="https://www.flaticon.com/authors/pixel-perfect"
                  title="Pixel perfect"
                >
                  Pixel perfect
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>
              </div>
              <div className="littleMargins">
                <div>
                  Icons made by{" "}
                  <a
                    href="https://www.flaticon.com/authors/freepik"
                    title="Freepik"
                  >
                    Freepik
                  </a>{" "}
                  from{" "}
                  <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                  </a>
                </div>
              </div>
              <div className="littleMargins">
                <div>
                  Icons made by{" "}
                  <a
                    href="https://www.flaticon.com/authors/roundicons"
                    title="Roundicons"
                  >
                    Roundicons
                  </a>{" "}
                  from{" "}
                  <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                  </a>
                </div>
              </div>
              <div className="littleMargins">
                <div>
                  Icons made by{" "}
                  <a
                    href="https://www.flaticon.com/authors/dmitri13"
                    title="dmitri13"
                  >
                    dmitri13
                  </a>{" "}
                  from{" "}
                  <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Resources;
