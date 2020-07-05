import React from 'react';
import {Divider, Layout, Row, Col } from 'antd';

const { Footer } = Layout;

function FooterCustom() {
    return (
        <Footer className="header-footer-background">
            <Row>
                <Col offset={8}>
                    <a href="__test">About Panduri</a>                
                <Divider type="vertical" />
                    <a href="__test">Contact Us</a>               
                <Divider type="vertical" />
                    <a href="__test">Legal Notices</a>                
                <Divider type="vertical" />
                    <a href="__test">Terms Of Use</a>                
                <Divider type="vertical" />
                    <a href="__test">Your Privacy Rights</a>
                </Col>
            </Row>
        </Footer>
    )
}

export default FooterCustom;
