import React, { useState } from 'react';

import { useContext } from 'react';
import { Table, Button, Popconfirm } from 'antd';
import { notification } from 'antd';
import { TypesContext } from '../../Store/Context/TypesNews';
import ShowModalCreateTypes from '../../Components/Modal/TypeNews/ShowModalCreateTypes';
import ModalUpdateType from '../../Components/Modal/TypeNews/ModalUpdateType';
import { SmileOutlined } from '@ant-design/icons';

const TypeNews = () => {
    const {
        typesState: { type },
        getType,
        createType,
        updateType,
        deleteType,
    } = useContext(TypesContext);
    // const news = [];

    const dataSource = type.map((item, index) => {
        return {
            key: item.id,
            TypeName: item.typeName,
        };
    });

    console.log(type);

    const columns = [
        {
            title: 'Chủ đề tin',
            width: 18,
            dataIndex: 'TypeName',
            key: 'TypeName',
            fixed: 'left',
        },

        {
            title: 'Thao Tác',
            width: '15%',
            key: '4',
            dataIndex: 'operation',
            render: (_, record) =>
                type.length >= 0 ? (
                    <>
                        <Popconfirm
                            title="Bạn chắc chắn muốn xóa ?"
                            onConfirm={() => handleDelete(record)}
                        >
                            <Button
                                style={{
                                    padding: 0,
                                    width: 30,
                                    marginRight: 5,
                                    borderRadius: 20,
                                }}
                                type="text"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z" />
                                </svg>
                            </Button>
                        </Popconfirm>
                        <Popconfirm
                            title="Bạn chắc chắn muốn sửa người dùng ?"
                            onConfirm={() => handleUpdate(record)}
                        >
                            <Button
                                style={{
                                    padding: 0,
                                    width: 30,
                                    marginRight: 5,
                                    borderRadius: 20,
                                }}
                                type="text"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M5 19h1.414l9.314-9.314-1.414-1.414L5 17.586V19zm16 2H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L9.243 19H21v2zM15.728 6.858l1.414 1.414 1.414-1.414-1.414-1.414-1.414 1.414z" />
                                </svg>
                            </Button>
                        </Popconfirm>
                    </>
                ) : null,
        },
    ];

    const [visibleCreate, setVisibleCreate] = useState(false);
    const [visibleShow, setVisibleShow] = useState(false);
    const [newsDetail, setNewsDetail] = useState({});
    const [newsEdit, setNewsEdit] = useState({});
    const [visibleUpdate, setVisibleUpdate] = useState(false);

    const onClose = () => {
        setVisibleCreate(false);
        setVisibleShow(false);
        setVisibleUpdate(false);
    };

    const handleShowCreate = async () => {
        setVisibleCreate(true);
    };

    const handleUpdate = async (record) => {
        setNewsEdit(record);
        setVisibleUpdate(true);
    };

    const handleDelete = async (record) => {
        const result = await deleteType(record.key);
        getType();
        console.log(result);
        if (result) {
            getType();
            notification.open({
                className: 'custom-class',
                description: 'Đã xóa',
                icon: <SmileOutlined style={{ color: '#108ee9' }} />,
            });
        } else {
            notification.open({
                description: result.message,
                message: 'Xảy ra lỗi',
                className: 'custom-class',
                style: {
                    width: 350,
                    backgroundColor: '#fff2f0',
                },
                type: 'error',
            });
        }
    };

    const clickUpdate = async (record) => {
        const result = await updateType(record);
        if (result) {
            getType();
            notification.open({
                className: 'custom-class',
                description: 'Cập nhật thành công',
                icon: <SmileOutlined style={{ color: '#108ee9' }} />,
            });
        } else {
            notification.open({
                description: result.message,
                message: 'Cập nhật thất bại',
                className: 'custom-class',
                style: {
                    width: 350,
                    backgroundColor: '#fff2f0',
                },
                type: 'error',
            });
        }
    };

    const handleCrate = async (news) => {
        const result = await createType(news);
        if (result) {
            getType();
            notification.open({
                className: 'custom-class',
                description: 'Thêm thành công',
                icon: <SmileOutlined style={{ color: '#108ee9' }} />,
            });
        } else {
            notification.open({
                description: 'Thêm thất bại',
                className: 'custom-class',
                style: {
                    width: 350,
                    backgroundColor: '#fff2f0',
                },
                type: 'error',
            });
        }
    };

    return (
        <div>
            <div className="content-news">
                <Button
                    className="btn-addNew"
                    type="primary"
                    style={{
                        marginBottom: 16,
                    }}
                    onClick={() => handleShowCreate()}
                >
                    Tạo mới
                </Button>
                <Table
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                    scroll={{ y: 350 }}
                />
            </div>
            <ShowModalCreateTypes
                visible={visibleCreate}
                onClose={() => setVisibleCreate(false)}
                handleCreate={handleCrate}
            />

            <ModalUpdateType
                input={newsEdit}
                visible={visibleUpdate}
                onClose={onClose}
                onUpdate={clickUpdate}
            />
        </div>
    );
};

export default TypeNews;
