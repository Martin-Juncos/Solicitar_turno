import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import React from "react";
import "../Ingresar.css";

const Carrousel = () => {
  const images = [
    {
      original:
        "https://github.com/Joabulla07/Proyecto2020-Python/blob/gh-pages/Proyecto2020/gestionAr/apps/users/static/static_login/img-2.jpg?raw=true",
      thumbnail:
        "https://github.com/Joabulla07/Proyecto2020-Python/blob/gh-pages/Proyecto2020/gestionAr/apps/users/static/static_login/img-2.jpg?raw=true"
    },
    {
      original:
        "https://github.com/Joabulla07/Proyecto2020-Python/blob/gh-pages/Proyecto2020/gestionAr/apps/users/static/static_login/img-1.jpg?raw=true",
      thumbnail:
        "https://github.com/Joabulla07/Proyecto2020-Python/blob/gh-pages/Proyecto2020/gestionAr/apps/users/static/static_login/img-1.jpg?raw=true"
    }
  ];

  return (
    <div className="carro">
      <h1>INGRESA Y GESTIONA TUS TURNOS</h1>
      <ImageGallery
        items={images}
        slideInterval={"5000"}
        showBullets={true}
        showIndex={true}
        showThumbnails={false}
        lazyLoad={true}
        showPlayButton={false}
      />
    </div>
  );
};

export default Carrousel;
