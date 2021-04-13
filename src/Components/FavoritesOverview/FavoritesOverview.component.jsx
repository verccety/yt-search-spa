import { Col, Space, Typography } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite, selectCurrentFavorites } from 'redux/user/userSlice';
import { FavoriteContainer } from './FavoritesOverview.styles';

const FavoritesOverview = () => {
  const { Text } = Typography;
  const dispatch = useDispatch();
  const userFavorites = useSelector(selectCurrentFavorites);

  return (
    <>
      {userFavorites &&
        userFavorites.map((favorite) => (
          <FavoriteContainer key={favorite.id}>
            <Col span={20}>
              <Text strong>{favorite.favoriteName}</Text>
            </Col>
            <Col span={4}>
              <Space>
                <Text type='warning'>Изменить</Text>
                <Text
                  type='danger'
                  onClick={() => dispatch(removeFavorite({ favoriteId: favorite.id }))}
                >
                  Удалить
                </Text>
              </Space>
            </Col>
          </FavoriteContainer>
        ))}
    </>
  );
};

export default FavoritesOverview;
