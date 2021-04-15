import styled from 'styled-components/macro';
import { Col, Popover, Typography } from 'antd';
import { AppstoreOutlined, BarsOutlined, HeartOutlined } from '@ant-design/icons';

const { Text } = Typography;

export const Container = styled(Col).attrs((props) => ({
  span: 24,
  justify: 'center',
}))`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 4rem;
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

export const StyledPopoverContent = styled.div`
  font-family: 'PT Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;

  & > span {
    display: inline-block;

    margin-bottom: 1.5rem;
  }
`;

export const TextVideoOnRequest = styled(Text)`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

// Popover needs to be wrapped to support styled-component:
const myPopover = ({ className, ...props }) => <Popover {...props} overlayClassName={className} />;

export const PopoverStyled = styled(myPopover)`
  width: 220px;
  height: 124px;

  & > div > * {
    border-radius: 5px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  }
`;

export const StyledTitle = styled.h2`
  font-size: 28px;
  line-height: 40px;
  font-weight: 400;
`;
