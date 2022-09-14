import React, { useState, useContext } from 'react';
import ReactQuill from 'react-quill';
import { modules, formats } from './Antd/Editor/EditorToolbar';
import 'react-quill/dist/quill.snow.css';
import './Antd/Editor/style.css';
import { AuthContext } from '../../Store/Context/AuthContext';
import { TypesContext } from '../../Store/Context/TypesNews.js';

import {
    Modal,
    Tabs,
    Form,
    Button,
    Col,
    Row,
    Input,
    Select,
    Upload,
} from 'antd';

const { TextArea } = Input;

const { TabPane } = Tabs;

const ShowModalCreateNews = ({ visible, onClose, handleCreate }) => {
    const {
        authState: { user },
    } = useContext(AuthContext);
    const {
        typesState: { type },
    } = useContext(TypesContext);

    const [state, setState] = useState({ value: '' });
    const [typesNews, setTypesNews] = useState([]);
    const [fileList, setFileList] = useState([]);
    const [file, setFile] = useState({});
    const [form] = Form.useForm();

    const handleChange = (value) => {
        setState({ value });
    };

    const onChange = ({ fileList: newFileList, file }) => {
        setFileList(newFileList);
        setFile(file);
    };

    const onFinish = (values) => {
        const newsCreate = {
            content: state.value,
            summary: values.brief,
            title: values.nameNews,
            count_like: 0,
            count_view: 0,
            name_image: file.response,
            id_type: typesNews.split('/')[1],
            author: user.split(',')[2],
            idUser: user.split(',')[0],
        };
        handleCreate(newsCreate);
        form.resetFields();
        setState('');
        setFileList([]);
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
                                        label="Chủ đề tin tức"
                                        name="nameNews"
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
                                        name="typesNews"
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
                                            onChange={(e) => setTypesNews(e)}
                                        >
                                            {type.length > 0 &&
                                                type.map((item, index) => {
                                                    return (
                                                        <Select.Option
                                                            key={item.id}
                                                            value={
                                                                item.typeName +
                                                                '/' +
                                                                item.id
                                                            }
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
                                        name="brief"
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
                                <Col span={12}>
                                    <Form.Item
                                        name="nameImage"
                                        label="Hình ảnh"
                                    >
                                        <Upload
                                            action={`http://localhost:8081/upload`}
                                            listType="picture"
                                            fileList={fileList}
                                            onChange={onChange}
                                            name="photo"
                                        >
                                            {fileList.length < 1 &&
                                                '+ Chọn ảnh'}
                                        </Upload>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                    Lưu tin
                                </Button>
                            </Form.Item>
                        </Form>
                    </TabPane>
                    <TabPane tab="Nội dung chính" key="2">
                        <div className="addNew__container">
                            <ReactQuill
                                style={{ minHeight: 500, maxWidth: 950 }}
                                theme="snow"
                                value={state.value}
                                onChange={handleChange}
                                placeholder={'Nội dung chính...'}
                                modules={modules}
                                formats={formats}
                            />
                        </div>
                    </TabPane>
                </Tabs>
            </Modal>
        </>
    );
};

export default ShowModalCreateNews;
