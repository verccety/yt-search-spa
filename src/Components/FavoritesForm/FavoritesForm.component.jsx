import { Button, Col, Form, Input, InputNumber, Row, Select, Slider } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const FavoritesForm = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(12);

  return (
    <Form name='favorites-form' layout='vertical' size='large'>
      <Form.Item
        name='request'
        label='Запрос'
        rules={[
          {
            required: true,
            message: 'Введите название',
          },
        ]}
      >
        <Input disabled={disabled} />
      </Form.Item>

      <Form.Item
        name='favoriteName'
        label='Название'
        rules={[
          {
            required: true,
            message: 'Введите название',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name='sortBy' label='Сортировать по'>
        <Select>
          <Option value=''>Без сортировки</Option>
          <Option value='relevance'>По релевантности</Option>
          <Option value='date'>По времени</Option>
          <Option value='rating'>По рейтингу</Option>
          <Option value='title'>По названию</Option>
          <Option value='videoCount'>По просмотрам</Option>
        </Select>
      </Form.Item>

      <Form.Item name='maxItems' label='Максимальное количество'>
        <Row>
          <Col span={20}>
            <Slider min={1} max={50} value={typeof inputValue === 'number' ? inputValue : 0} />
          </Col>

          <Col span={4}>
            <InputNumber min={1} max={50} style={{ margin: '0 16px' }} value={inputValue} />
          </Col>
        </Row>
      </Form.Item>

      <Row>
        <Col>
          <Form.Item>
            <Button htmlType='button'>Не сохранять</Button>
          </Form.Item>{' '}
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Сохранить
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default FavoritesForm;
