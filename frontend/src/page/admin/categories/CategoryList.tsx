import React from 'react'
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Space, Table, Typography } from "antd";
import { NavLink } from "react-router-dom";


const { Text, Title } = Typography;

type Props = {}

const CategoryList = (props: Props) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      key: "action",
      render: (record: any) => (
        <Space size="middle">
          <NavLink to={"/admin/category/edit/" + record.key}>
            <EditOutlined />
          </NavLink>
          <Text type="danger">
            <DeleteOutlined />
          </Text>
        </Space>
      ),
    },
  ];
  // const data = categories?.map((item, index) => {
  //   return {
  //     key: index + 1,
  //     _id: item._id,
  //     name: item.name,
  //   };
  // });
  const data: any[] = [
    {
      key: '1',
      name: 'Category 1',
      
    },
    {
      key: '2',
      name: 'Category 2',
     
    },
    {
      key: '3',
      name: 'Category 3',
     
    },
  ];
  return (
    <section className="home-section">
    <Breadcrumb>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Categories</Breadcrumb.Item>
    </Breadcrumb>
    <div className="home-content" style={{ padding: 40 }}>
      <Title level={2}>CATEGORY LIST</Title>
      <Button type="primary" style={{ marginBottom: 16 }} ghost>
        <NavLink to={"add"}>Add Category</NavLink>
      </Button>
      <Table dataSource={data} columns={columns} />
    </div>
  </section>
  )
}

export default CategoryList