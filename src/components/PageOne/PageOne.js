import React from 'react'
import AppPageLayout from '../AppPageLayout/AppPageLayout'
import { Breadcrumb } from 'antd'

function PageOne() {
    return (
        <AppPageLayout title="Bill">
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Root</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                Bill is a cat.
      </div>
        </AppPageLayout>
    )
}

export default PageOne