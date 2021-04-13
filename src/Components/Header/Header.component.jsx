import { Layout, Menu, Row } from 'antd';
import logo from 'assets/logo.svg';
import SignoutButton from 'components/SignoutButton/SignoutButton.component';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';


const items = [
  { key: '1', label: 'Поиск', path: '/search' },
  { key: '2', label: 'Избранное', path: '/favorites' },
];

const Header = () => {
  const { Header } = Layout;
  const history = useHistory();
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState(
    items.find((_item) => location.pathname.startsWith(_item.path)).key
  );

  const onClickMenu = (item) => {
    const clicked = items.find((_item) => _item.key === item.key);
    history.push(clicked.path);
  };

  useEffect(() => {
    setSelectedKey(items.find((_item) => location.pathname.startsWith(_item.path)).key);
  }, [location]);

  return (
    <Header className={styles.header}>
      <Row className={styles.container} align='middle'>
        <img src={logo} className={styles.logo} alt='' />{' '}
        <Menu
          mode={'horizontal'}
          selectedKeys={[selectedKey]}
          className={styles.menu}
          onClick={onClickMenu}>

          {items.map((item) => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
          
        </Menu>
        <SignoutButton />
      </Row>
    </Header>
  );
};

export default Header;
