import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Button } from "reactstrap";

const ProductTypeView = props => {
  return (
    <Container fluid>
      <Row>
        <Col lg="2">Iniciales</Col>
        <Col>{props.productType.initials}</Col>
      </Row>
      <Row>
        <Col lg="2">Descripción</Col>
        <Col>{props.productType.description}</Col>
      </Row>
      <div className="product-type-view__button-row">
        <Button
          className="product-type-form__button"
          color="primary"
          onClick={() => props.push(`/producttype/update/${props.match.params.id}`)}
        >
          Editar
        </Button>
        <Button
          className="product-type-form__button"
          color="danger"
          onClick={() =>
            props.push(`/producttype/view/${props.match.params.id}/remove`)
          }
        >
          Eliminar
        </Button>
        <Button
          className="product-type-form__button"
          color="default"
          onClick={() => props.push(`/producttype`)}
        >
          Volver
        </Button>
      </div>
    </Container>
  );
};

ProductTypeView.propTypes = {
  productType: PropTypes.object.isRequired,
  push: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};

export default ProductTypeView;
