import { Layout } from 'antd';
import Header from 'components/Header/Header.component';
import { StyledContent } from './MenuLayout.styles';
import FavoritesModal from 'components/FavoritesModal/FavoritesModal.component';

const MenuLayout = ({ children }) => {
  return (
    <Layout>
      <Header />
      <StyledContent>{children}</StyledContent>
      <FavoritesModal />
    </Layout>
  );
};

export default MenuLayout;
