import React from 'react';
import 'react-quill/dist/quill.snow.css';
import '../Antd/Editor/style.css';

import { Drawer, Form, Col, Row, Input, Button } from 'antd';

const ModalUpdateType = ({ input, visible, onClose, onUpdate }) => {
    console.log(input);

    const onFinish = (values) => {
        const typeUpdate = {
            id: input.key,
            typeName: values.typeName,
        };
        onUpdate(typeUpdate);
    };

    return (
        <>
            <Drawer
                destroyOnClose
                title={input.title}
                visible={visible}
                width={600}
                onClose={onClose}
            >
                <Form
                    layout="vertical"
                    hideRequiredMark
                    onFinish={onFinish}
                    initialValues={{
                        typeName: input.TypeName,
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
                                label="Tên chủ đề"
                                name="typeName"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            'Tên chủ đề không được để trống',
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

export default ModalUpdateType;
