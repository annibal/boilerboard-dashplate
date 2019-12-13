import React from 'react'
import AppPageLayout from '../AppPageLayout/AppPageLayout'
import { Breadcrumb } from 'antd'

function PageTwo() {
    return (
        <AppPageLayout title="Jones">
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Root</Breadcrumb.Item>
                <Breadcrumb.Item>Jones</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                Jones is not a cat.
        
                <img src="https://www.placecage.com/3000/3000" alt="placeholder cage of 3000 square px" />
            </div>
        </AppPageLayout>
    )
}

export default PageTwo