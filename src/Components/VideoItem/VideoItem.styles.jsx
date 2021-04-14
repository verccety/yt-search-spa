import styled from 'styled-components/macro';
import { css } from 'styled-components';
import { Row, Typography } from 'antd';

const { Title } = Typography;

const cellStyle = css`
  grid-template-rows: auto;
  grid-template-columns: 20rem 50rem;
  column-gap: 1rem;
`;

const getCellStyle = ({ $viewMode }) => {
  if ($viewMode === 'vertical') return cellStyle;
};

export const VideoCell = styled(Row)`
  transition: all 0.2s;
  cursor: pointer;
  display: grid;
  grid-template-rows: max-content 10rem;
  row-gap: 0.5rem !important;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0px 10px 50px rgba(19, 144, 229, 0.2), 0px 10px 50px rgba(19, 144, 229, 0.2);
  }

  ${getCellStyle}
`;

export const ImgContainer = styled.img`
  width: 100%;
  max-width: 25rem;
`;

export const DescriptionContainer = styled(Row)`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  line-height: 1.2;
`;

export const StyledTitle = styled(Title)`
  font-size: 14px !important;
  text-overflow: ellipsis;
`;
