import React, { useState } from 'react'
import  { Layout, Menu, Icon } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import { getRoutes } from '../AppRouter/RoutesProvider';
const { Sider } = Layout
const { SubMenu } = Menu;

function AppMenu(props) {
    const Routes = getRoutes();
    const [collapsed, setCollapsed] = useState(true);

    return (
        <Sider collapsible collapsed={collapsed} theme="light" onCollapse={setCollapsed}>
            <div className="logo" />
            <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1">
                    <Link to={Routes.OPTION_1}>
                        <Icon type="pie-chart" />
                        <span>Option 1</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to={Routes.OPTION_2}>
                        <Icon type="desktop" />
                        <span>Option 2</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="31">
                    <Link to={Routes.OPTION_3}>
                        <Icon type="highlight" />
                        <span>Option 3</span>
                    </Link>
                </Menu.Item>
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="user" />
                            <span>User</span>
                        </span>
                    }
                >
                    <Menu.Item key="3">Tom</Menu.Item>
                    <Menu.Item key="4">Bill</Menu.Item>
                    <Menu.Item key="5">Alex</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={
                        <span>
                            <Icon type="team" />
                            <span>Team</span>
                        </span>
                    }
                >
                    {Array(50).fill().map((x, i) => (
                        <Menu.Item key={"sm6" + i}>Team {i}</Menu.Item>
                    ))}
                </SubMenu>
                <Menu.Item key="9">
                    <Icon type="file" />
                    <span>File</span>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default withRouter(AppMenu);