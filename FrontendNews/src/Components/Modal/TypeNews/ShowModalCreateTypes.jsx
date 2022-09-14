import React from 'react';

import '../Antd/Editor/style.css';

import { Modal, Tabs, Form, Button, Col, Row, Input } from 'antd';

const { TabPane } = Tabs;

const ShowModalCreateTypes = ({ visible, onClose, handleCreate }) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        const typeCreate = {
            nameType: values.nameType,
        };
        handleCreate(typeCreate);
    };

    return (
        <>
            <Modal
                centered
                visible={visible}
                onCancel={onClose}
                width={1000}
                footer={[]}
            >
                <Tabs type="card">
                    <TabPane tab="Thông tin chính" key="1">
                        <Form
                            layout="vertical"
                            hideRequiredMark
                            onFinish={onFinish}
                            form={form}
                        >
                            <Row gutter={16}>
                                <Col span={9}></Col>
                                <Col span={9}></Col>
                                <Col span={9}></Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={23}>
                                    <Form.Item
                                        label="Chủ đề"
                                        name="nameType"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Tên chủ đề không được để trống',
                                            },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Tên chủ đề"
                                            allowClear
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                    Lưu chủ đề
                                </Button>
                            </Form.Item>
                        </Form>
                    </TabPane>
                </Tabs>
            </Modal>
        </>
    );
};

export default ShowModalCreateTypes;
