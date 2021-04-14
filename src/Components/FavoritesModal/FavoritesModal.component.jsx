import { Modal } from 'antd';
import FavoritesForm from 'components/FavoritesForm/FavoritesForm.component';
import { useSelector } from 'react-redux';
import { selectIsModalVisible } from 'redux/modal/modalSlice';
import { StyledModal } from './FavoritesModal.styles';
import { useLocation } from 'react-router-dom';

const FavoritesModal = () => {
  const visible = useSelector(selectIsModalVisible);
  const currentLocation = useLocation().pathname;

  return (
    <StyledModal
      title={currentLocation.startsWith('/search') ? 'Сохранить запрос' : 'Изменить запрос'}
      visible={visible}
      closable={false}
      footer={null}
      maskClosable={false}
    >
      <FavoritesForm currentLocation={currentLocation} />
    </StyledModal>
  );
};

export default FavoritesModal;
