import React from 'react';
import { Drawer, Descriptions, Image } from 'antd';

import HTMLReactParser from 'html-react-parser';

const ShowDrawer = ({ input, visible, onClose }) => {
    console.log(input.content);
    return (
        <Drawer
            destroyOnClose
            title={input.title}
            visible={visible}
            width={1000}
            onClose={onClose}
        >
            <Image
                width={100}
                style={{
                    height: 300,
                    width: 300,
                    marginLeft: '100%',
                    marginBottom: '20px',
                }}
                src={`http://localhost:8081/image/${input.nameImage}`}
            />
            <Descriptions title="Thông tin" layout="vertical" bordered>
                <Descriptions.Item label="Tiêu đề">
                    {input.title}
                </Descriptions.Item>
            </Descriptions>
            <Descriptions title="" layout="vertical" bordered>
                <Descriptions.Item label="Tóm tắt">
                    {input.summary}
                </Descriptions.Item>
            </Descriptions>
            <Descriptions title="" layout="vertical" bordered>
                <Descriptions.Item label="Lượt xem" span={2}>
                    {input.countView}
                </Descriptions.Item>
                <Descriptions.Item label="Lượt thích">
                    {input.countLike}
                </Descriptions.Item>
            </Descriptions>
            <Descriptions title="" layout="vertical" bordered>
                <Descriptions.Item label="Chi tiết bài đăng">
                    {HTMLReactParser(`${input.content}`)}
                </Descriptions.Item>
            </Descriptions>
            <div style={{ padding: 10 }}></div>
        </Drawer>
    );
};

export default ShowDrawer;
