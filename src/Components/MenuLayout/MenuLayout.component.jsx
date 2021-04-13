import { Layout } from 'antd';
import Header from 'components/Header/Header.component';
import { StyledContent } from './MenuLayout.styles';

const MenuLayout = ({ children }) => {
  return (
    <Layout>
      <Header />
      <StyledContent>{children}</StyledContent>
    </Layout>
  );
};

export default MenuLayout;
