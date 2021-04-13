import { Layout } from 'antd';
import Header from 'components/Header/Header.component';
import styles from './MenuLayout.module.scss';


const MenuLayout = ({children}) => {
  const { Content } = Layout;

  return (
    <Layout>
      <Header />
      <Content className={styles.content}>
        {children}
      </Content>
    </Layout>
  );
};

export default MenuLayout;
