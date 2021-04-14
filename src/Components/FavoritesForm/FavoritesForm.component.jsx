import { Col, Form, Input, InputNumber, Row, Select, Slider } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsModalVisible } from 'redux/modal/modalSlice';
import { selectFormInitialValues } from 'redux/form/formSlice';
import { addFavorite } from 'redux/user/userSlice';
import { CancelButton, layout, SubmitButton } from './FavoritesForm.styles';

const INITIAL_MAX_ITEMS = 12;
const { Option } = Select;

const FavoritesForm = ({ currentLocation }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const initialValues = useSelector(selectFormInitialValues);

  const [inputValue, setInputValue] = useState(INITIAL_MAX_ITEMS);

  const onChange = (value) => {
    setInputValue(value);
  };

  const onReset = () => {
    dispatch(setIsModalVisible());
    form.resetFields();
    setInputValue(INITIAL_MAX_ITEMS);
  };

  const onSubmit = () => {
    dispatch(setIsModalVisible());
    form
      .validateFields()
      .then((values) => {
        dispatch(addFavorite({ favoriteObj: values }));

        form.resetFields();
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  useEffect(() => {
    form.setFieldsValue({
      ['maxItems']: inputValue,
    });
  }, [inputValue, form]);

  return (
    <Form
      name='favorites-form'
      layout='vertical'
      size='large'
      onFinish={onSubmit}
      initialValues={initialValues}
      form={form}
      {...layout}
    >
      <Form.Item name='request' label='Запрос'>
        <Input disabled={currentLocation === '/search' ? true : false} />
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
            <Slider
              min={1}
              max={50}
              value={typeof inputValue === 'number' ? inputValue : 0}
              onChange={onChange}
            />
          </Col>

          <Col span={4}>
            <InputNumber
              min={1}
              max={50}
              style={{ margin: '0 16px' }}
              value={inputValue}
              onChange={onChange}
            />
          </Col>
        </Row>
      </Form.Item>

      <Row justify='center'>
        <Form.Item>
          <CancelButton htmlType='button' onClick={onReset}>
            {currentLocation === '/search' ? 'Не сохранять' : 'Не изменять'}
          </CancelButton>
        </Form.Item>
        <Form.Item>
          <SubmitButton type='primary' htmlType='submit'>
            {currentLocation === '/search' ? 'Сохранить' : 'Изменить'}
          </SubmitButton>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default FavoritesForm;