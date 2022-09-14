import React from 'react';
import 'antd/dist/antd.min.css';
import { Layout, Menu, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
    DesktopOutlined,
    MailOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
const { Content, Sider, Footer } = Layout;

const LayoutAdmin = ({ children }) => {
    const history = useNavigate();

    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }

    const items = [
        getItem('Dashboard', '/dashboard', <PieChartOutlined />),
        getItem('Quản trị viên', '/user', <DesktopOutlined />),
        getItem('Quản lý tin tức', 'sub1', <MailOutlined />, [
            getItem('Quản lý loại tin', '/typenews'),
            getItem('Quản lý tin tức', '/news'),
        ]),
    ];

    const onSelect = (item) => {
        history(`${item.key}`);
    };

    const handClick = (e) => {
        e.preventDefault();
        history('/');
    };
    const logoutHan = async (e) => {
        e.preventDefault();
        localStorage.removeItem('token_user');
        history('/loginadmin');
    };

    return (
        <div>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    style={{
                        paddingTop: '20px',
                        paddingLeft: '10px',
                    }}
                >
                    <div style={{ marginLeft: 10 }}>
                        <Button
                            onClick={handClick}
                            style={{
                                marginLeft: 20,
                                marginBottom: 16,
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9zM7.5 13a4.5 4.5 0 1 0 9 0h-2a2.5 2.5 0 1 1-5 0h-2z" />
                            </svg>
                        </Button>
                        <Button
                            onClick={logoutHan}
                            style={{
                                marginBottom: 16,
                                marginLeft: 20,
                                color: '#fff',
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M5 2h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm4 9V8l-5 4 5 4v-3h6v-2H9z" />
                            </svg>
                        </Button>
                    </div>
                    <Menu
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        theme="dark"
                        items={items}
                        onSelect={onSelect}
                    />
                    <Footer
                        style={{
                            padding: '5px 21px !important',
                            color: ' rgb(247 243 243 / 85%)',
                            fontSize: '14px',
                            background: '#001529',
                            position: 'absolute',
                            bottom: 0,
                            width: 190,
                            left: -10,
                        }}
                    >
                        @Design by StudentsVMU.net
                    </Footer>
                </Sider>
                <Layout style={{ flexDirection: 'column-reverse' }}>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 50,
                            background: '#fff',
                            minHeight: 280,
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default LayoutAdmin;
