import { Col, Row, Typography } from 'antd';
import React from 'react';
import { Container } from './Favorites.styles';
import FavoritesOverview from 'components/FavoritesOverview/FavoritesOverview.component';

const FavoritesPage = () => {
  return (
    <Row>
      <Container>
        <Row>
          <Col span={24}>
            <h1>Избранное</h1>
          </Col>
        </Row>
        <FavoritesOverview />
      </Container>
    </Row>
  );
};

export default FavoritesPage;
