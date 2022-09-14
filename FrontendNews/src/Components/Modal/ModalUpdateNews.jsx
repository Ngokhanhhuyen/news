import React, { useEffect, useState, useContext } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Antd/Editor/style.css';
import { modules, formats } from './Antd/Editor/EditorToolbar';
import { TypesContext } from '../../Store/Context/TypesNews';

import { Drawer, Form, Col, Row, Input, Select, Button } from 'antd';
const { TextArea } = Input;

const ModalUpdateTypes = ({ input, visible, onClose, onUpdate }) => {
    console.log(input);
    const {
        typesState: { type },
        // getType,
    } = useContext(TypesContext);

    const [state, setState] = useState({ value: input[3] });
    const [typeState, setTypeState] = useState(null);
    const handleChange = (value) => {
        console.log(value);
        setState({ value });
    };

    useEffect(() => {
        setState({ value: input[3] });
    }, [input]);

    const onFinish = (values) => {
        const productUpdate = {
            id: input[0],
            title: values.title,
            summary: values.summary,
            content: state.value,
            idType: values.typeName,
        };
        onUpdate(productUpdate);
    };

    console.log(input);
    return (
        <>
            <Drawer
                destroyOnClose
                title={input.title}
                visible={visible}
                width={1200}
                onClose={onClose}
            >
                <Form
                    layout="vertical"
                    hideRequiredMark
                    onFinish={onFinish}
                    initialValues={{
                        title: input[1],
                        summary: input[2],
                        typeName: input[8],
                    }}
                >
                    <Row gutter={16}>
                        <Col span={9}></Col>
                        <Col span={9}></Col>
                        <Col span={9}></Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={23}>
                            <Form.Item
                                label="Chủ đề tin tức"
                                name="title"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            'Chủ đề tin tức không được để trống',
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Chủ đề tin tức"
                                    allowClear
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={6}>
                            <Form.Item
                                name="typeName"
                                label="Chọn danh mục tin tức"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            'Bạn chưa chọn danh mục tin tức',
                                    },
                                ]}
                            >
                                <Select
                                    onChange={(e) => setTypeState(e)}
                                    placeholder={input[6]}
                                >
                                    {type.length > 0 &&
                                        type.map((item, index) => {
                                            return (
                                                <Select.Option
                                                    key={item.id}
                                                    value={item.id}
                                                >
                                                    {item.typeName}
                                                </Select.Option>
                                            );
                                        })}
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={23}>
                            <Form.Item
                                name="summary"
                                label="Tóm tắt"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            'Bạn chưa chọn danh mục tin tức',
                                    },
                                ]}
                            >
                                <TextArea rows={6} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Form.Item
                            style={{ marginLeft: '8px' }}
                            name="description"
                            label="Mô tả"
                        >
                            <div className="addNew__container">
                                <ReactQuill
                                    style={{
                                        minHeight: 500,
                                        maxWidth: 1164,
                                        borderRight: '0.5px solid gray',
                                    }}
                                    theme="snow"
                                    value={state.value}
                                    onChange={handleChange}
                                    placeholder={
                                        'Nhập nội dung sản phẩm tại đây...'
                                    }
                                    modules={modules}
                                    formats={formats}
                                />
                            </div>
                        </Form.Item>
                    </Row>

                    <Form.Item wrapperCol={{ offset: 21, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Cập nhật
                        </Button>
                    </Form.Item>
                </Form>
            </Drawer>
        </>
    );
};

export default ModalUpdateTypes;
