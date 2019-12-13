import React from 'react'
import { Layout } from 'antd'
const { Header, Content } = Layout;

function AppPageLayout({ title, children }) {
    return (
        <Layout>
            <Header style={{ background: '#fff' }}>{title}</Header>
            <Content style={{ margin: '0 16px' }}>
                {children}
            </Content>
        </Layout>
    )
}

export default AppPageLayout