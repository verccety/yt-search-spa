import { Layout, message } from 'antd';
import { useEffect } from 'react';
import Header from 'components/Header/Header.component';
import { StyledContent } from './MenuLayout.styles';
import FavoritesModal from 'components/FavoritesModal/FavoritesModal.component';
import { useSelector } from 'react-redux';

const MenuLayout = ({ children }) => {
  const errorMsg = useSelector((state) => state.search.error);

  useEffect(() => {
    if (errorMsg) {
      message.error(errorMsg, 7);
    }
  }, [errorMsg]);

  return (
    <Layout>
      <Header />
      <StyledContent>{children}</StyledContent>
      <FavoritesModal />
    </Layout>
  );
};

export default MenuLayout;
