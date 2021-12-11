import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./StyledCard";
import Button from "@material-ui/core/Button";
//Modal
import { Modal } from "@material-ui/core";

const Cards = ({ list, set, get }) => {
  const { name, initialPrice, photo, id, description, gramos, finalGramos,finalPrice } = list;
  const classes = useStyles();

  //Carrito
  const anadirCarrito = () => {
    const canti = Number(document.querySelector('#cant').value);
    set([...get,{
      name: name,
      cantidad: canti,
      photo: photo,
      precio: initialPrice,
      gramos: gramos,
      gramosFinal:finalGramos,
      precioFinal: finalPrice
    }])

  }

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(get))
  }, [get])

  //Modal
  const [modal, setModal] = useState(false);

  const abrirCerrarModal = () => {
    setModal(!modal);
  };

  const body = (
    <div className={classes.modal}>
      <div className={classes.divCont}>
        <div>
          <img
            className={classes.imgCon}
            src={photo}
            alt={name}
            width="200px"
            height="200px"
          />
        </div>
        <div className={classes.divDesc}>
          <h2 className={classes.titleModal}>{list.name}</h2>
          <h3>${initialPrice}/KG</h3>
          <p className={classes.iva}>Precios con iva incluidos</p>
          <p>{description}</p>
          <div align="right">
            <input className={classes.input} type="number" id="cant" min="1" />
            <Button variant="contained" className={classes.btnAgregar} onClick={anadirCarrito}>
              Agregar
            </Button>
          </div>
        </div>
      </div>
      <img className={classes.imgClose} onClick={abrirCerrarModal} src="https://res.cloudinary.com/djbaqvlnn/image/upload/v1639208748/tiendita/cancel_ujlvyc.png" alt="" />
    </div>
  );

  //Fin del modal

  return (
    <>
      <Card
        id="1"
        className={classes.root}
        onClick={(e) => {
          abrirCerrarModal();
        }}
      >
        <CardMedia
          id={id}
          className={classes.media}
          image={photo}
          title={name}
        />
        <CardContent className={classes.contenedor}>
          <Typography className={classes.precio}>
            Precio: ${initialPrice}/Kg
          </Typography>
        </CardContent>
        <CardContent className={classes.contenedor}>
          <Button className={classes.button}>Agregar</Button>
        </CardContent>
      </Card>

      {/* Modal */}
      <Modal open={modal}>{body}</Modal>
    </>
  );
};

export default Cards;
