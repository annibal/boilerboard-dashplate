import React from 'react'
import { Layout } from 'antd'
import AppRouter from '../AppRouter/AppRouter'
import AppFooter from '../AppFooter/AppFooter'

function AppContent() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <AppRouter />
            <AppFooter />
        </Layout>
    )
}

export default AppContent