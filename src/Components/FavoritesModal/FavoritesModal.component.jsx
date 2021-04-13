import { Modal } from 'antd';
import FavoritesForm from 'components/FavoritesForm/FavoritesForm.component';

const FavoritesModal = ({ ...props }) => {
  return (
    <Modal
      title='Изменить запрос'
      visible={props.isModalVisible}
      closable={false}
      footer={null}
      maskClosable={false}
    >
      <FavoritesForm />
    </Modal>
  );
};

export default FavoritesModal;
