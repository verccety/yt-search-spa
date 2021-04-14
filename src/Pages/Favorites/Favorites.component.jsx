import { Col, Row } from 'antd';
import React from 'react';
import { Container } from './Favorites.styles';
import FavoritesOverview from 'components/FavoritesOverview/FavoritesOverview.component';
import MenuLayout from 'components/MenuLayout/MenuLayout.component';

const FavoritesPage = () => {
  return (
    <MenuLayout>
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
    </MenuLayout>
  );
};

export default FavoritesPage;
