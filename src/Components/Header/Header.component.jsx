import { Menu } from 'antd';
import logo from 'assets/logo.svg';
import SignoutButton from 'components/SignoutButton/SignoutButton.component';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Container, Logo, StyledHeader, StyledMenu } from './Header.styles';

const items = [
  { key: '1', label: 'Поиск', path: '/search' },
  { key: '2', label: 'Избранное', path: '/favorites' },
];

const Header = () => {
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
    <StyledHeader>
      <Container align='middle'>
        <Logo src={logo} alt='Лого' />
        <StyledMenu mode={'horizontal'} selectedKeys={[selectedKey]} onClick={onClickMenu}>
          {items.map((item) => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
        </StyledMenu>
        <SignoutButton />
      </Container>
    </StyledHeader>
  );
};

export default Header;
