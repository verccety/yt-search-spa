import { Col, Space, Typography } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite, selectCurrentFavorites } from 'redux/user/userSlice';
import { FavoriteContainer } from './FavoritesOverview.styles';
import { setIsModalVisible } from 'redux/modal/modalSlice';
import { setInitialValues } from 'redux/form/formSlice';
import { useHistory } from 'react-router-dom';
import { setSearchParams } from 'redux/search/searchSlice';

const { Text } = Typography;

const FavoritesOverview = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userFavorites = useSelector(selectCurrentFavorites);

  const handleEditFavorite = (favorite) => {
    dispatch(setInitialValues(favorite));
    dispatch(setIsModalVisible());
  };

  const handleRequestExec = (favorite) => {
    const { request, sortBy, maxItems } = favorite;
    history.push('/search');
    dispatch(setSearchParams({ searchQuery: request, sortBy, maxItems }));
  };
  return (
    <>
      {userFavorites &&
        userFavorites.map((favorite) => (
          <FavoriteContainer key={favorite.id}>
            <Col span={18}>
              <Text strong>{favorite.favoriteName}</Text>
            </Col>
            <Col span={6}>
              <Space>
                <Text type='warning' onClick={() => handleRequestExec(favorite)}>
                  Выполнить
                </Text>
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
          </FavoriteContainer>
        ))}
    </>
  );
};

export default FavoritesOverview;
