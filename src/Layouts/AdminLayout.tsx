import React, { useState } from 'react'
import {Link, Outlet} from 'react-router-dom'
import {
  FileOutlined,
  PieChartOutlined,
  BarsOutlined,
  FolderOutlined, 
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const AdminLayout = () => {
  const { Header, Content, Footer, Sider } = Layout;

  type MenuItem = Required<MenuProps>['items'][number];
  
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  
  const items: MenuItem[] = [
    getItem('DashBoard', '1',<Link to={'/admin'}>< PieChartOutlined/></Link>, ),
    getItem('Users', 'sub2', <Link to={'/admin/user'}><UserOutlined/></Link>,),
    getItem('Products', '2', <Link to={'/admin/product'}><FolderOutlined/></Link>,),
    getItem('Catgories', 'sub1', <Link to={'/admin/category'}><BarsOutlined/></Link>, [
      getItem('Danh Mục 1', '3',<Link to={'/admin/category'}></Link>),
      getItem('Danh Mục 2', '4',<Link to={'/admin/category'}></Link>),
      getItem('Danh Mục 3', '5',<Link to={'/admin/category'}></Link>),
    ]),
    
    getItem('Files', '9', <FileOutlined />),
  ];
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      
      <Layout style={{ minHeight: '100vh',minWidth:'100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer ,textAlign:"center"}}><div style={{fontSize:"20pt",fontWeight:"bolder"}}>Admin Manage</div></Header>
        <Content style={{ margin: '0 16px' }}>
    
          <Outlet/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
</div>
  )
}

export default AdminLayout