import React from 'react';
import { Menu, Dropdown, Avatar, Row, Col } from 'antd';
import { Layout } from 'antd';
import { UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { ReactComponent as ReactLogo } from '../../utils/images/logo.svg';

const { Header } = Layout;
const menu = (
    <Menu>
        <Menu.Item>
            Preferencs
        </Menu.Item>
        <Menu.Item>
            Help
        </Menu.Item>
        <Menu.Item>
            About
        </Menu.Item>
        <Menu.Item>
            Sign Out
        </Menu.Item>
    </Menu>
);

function HeaderCustom(props) {

    return (<Header className="header-footer-background" style={{ padding: 0 }}>
        <Row>
            <Col span={3}>
                <Row>
                    <Col>
                        {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            style: { fontSize: '28px', margin: "5px", color: "#fff" },
                            onClick: props.updateCollapsedState,
                        })}
                    </Col>
                    <Col>
                        <ReactLogo width="150" height="40" className="logo" style={{ paddingTop: "15px" }} />
                    </Col>
                </Row>
            </Col>
            <Col span={1} offset={20}>
                <Row>
                    <Col>
                        <Dropdown overlay={menu} placement="bottomLeft">
                            <Avatar size="large" icon={<UserOutlined />} style={{ cursor: "pointer" }} />
                        </Dropdown>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Header>)
}

export default HeaderCustom;