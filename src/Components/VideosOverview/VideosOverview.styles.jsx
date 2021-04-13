import styled from 'styled-components/macro';
import { Col } from 'antd';
import { AppstoreOutlined, BarsOutlined, HeartOutlined } from '@ant-design/icons';

export const Container = styled(Col).attrs((props) => ({
  span: 24,
  justify: 'center',
}))`
  display: grid;
  grid-template-columns: 100%;
  padding: 0 5rem;
  justify-content: center;
  max-width: 100rem;
  margin: 0 auto;
  margin-top: 5rem;
  margin-bottom: 3rem;
  gap: 1rem;
`;

export const InputContainer = styled.div`
  min-width: 80rem;
  max-width: 100rem;
  min-height: 10rem;

  > span > input {
    border-radius: 3px;
    height: 10rem;
  }
`;

export const ViewMode = styled(Col)`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  > * {
    height: 2rem;
    width: 2rem;
    gap: 1rem;
  }
`;

export const FavoriteIcon = styled(HeartOutlined)`
  font-size: 16px;
  color: #08c;
  cursor: pointer;

  svg {
    height: 24px;
    width: 24px;
  }
`;

export const VerticalIcon = styled(BarsOutlined)`
  font-size: 22px;
  color: ${({ $viewMode }) => ($viewMode === 'vertical' ? '#111' : '#999')};
  cursor: pointer;
  margin-right: 2rem;
`;

export const GridIcon = styled(AppstoreOutlined)`
  font-size: 22px;
  color: ${({ $viewMode }) => ($viewMode === 'grid' ? '#111' : '#999')};
  cursor: pointer;
`;
