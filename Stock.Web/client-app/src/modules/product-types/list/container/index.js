import React from "react";
import { Container, Row, Col } from "reactstrap";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ProductTypeTable from './ProductTypeTable';

import PropTypes from "prop-types";

const Presentation = props => {
  return (
    <Container fluid>
      <Row className="my-1">
        <Col>
          <h1>Categorias</h1>
        </Col>
      </Row>
      <Row className="my-1">
        <Col>
            <Button variant="contained" startIcon={<AddIcon />}>
                Agregar
            </Button>
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <ProductTypeTable />
        </Col>
      </Row>
    </Container>
  );
};

Presentation.propTypes = {
};

export default Presentation;
