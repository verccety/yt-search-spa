import { Col, Space, Typography } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite, selectCurrentFavorites } from 'redux/user/userSlice';
import { FavoriteContainer } from './FavoritesOverview.styles';
import { setIsModalVisible } from 'redux/modal/modalSlice';
import FavoritesModal from 'components/FavoritesModal/FavoritesModal.component';
import { setInitialValues } from 'redux/form/formSlice';

const { Text } = Typography;

const FavoritesOverview = () => {
  const dispatch = useDispatch();
  const userFavorites = useSelector(selectCurrentFavorites);

  const handleEditFavorite = (favorite) => {
    dispatch(setInitialValues(favorite));
    dispatch(setIsModalVisible());
  };

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
                <Text style={{ color: '#1390E5' }} onClick={() => handleEditFavorite(favorite)}>
                  Изменить
                </Text>
                <Text
                  style={{ color: '#FF0000' }}
                  onClick={() => dispatch(removeFavorite({ favoriteId: favorite.id }))}
                >
                  Удалить
                </Text>
              </Space>
            </Col>
            <FavoritesModal />
          </FavoriteContainer>
        ))}
    </>
  );
};

export default FavoritesOverview;
