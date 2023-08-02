import React from 'react'
import { Table, Space, Typography, Button, Breadcrumb, Image } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";


const { Text, Title } = Typography;

type Props = {}

const ProductList = (props: Props) => {
    const columns = [
        {
          title: "ID",
          dataIndex: "key",
        },
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          render: (text: string) => <a>{text}</a>,
        },
        {
          title: "Image",
          dataIndex: "image",
          key: "image",
          render: (image: string) => (
            <a>
              <img src={image} alt="" width={200} />
            </a>
          ),
        },
        {
          title: "Price (USD)",
          dataIndex: "price",
          key: "price",
        },
        {
          title: "Category",
          dataIndex: "category",
          key: "category",
        },
        {
          title: "Description",
          dataIndex: "description",
          key: "description",
        },
        {
          title: "Action",
          key: "action",
          render: (record: any) => (
            <Space size="middle">
              <NavLink to={"/admin/products/edit/" + record.key}>
                <EditOutlined />
              </NavLink>
              <Text type="danger" >
                <DeleteOutlined />
              </Text>
            </Space>
          ),
        },
      ];
    //   const data = products?.map((item, index) => {
    //     return {
    //       key: index + 1,
    //       _id: item._id,
    //       name: item.name,
    //       price: Currency(item.price),
    //       category: item.category.name,
    //       description: item.description,
    //       image: item.image,
    //     };
    //   });     
    const data: any[] = [
      {
        key: '1',
        name: 'John Brown',
        price: 32,
        category: 'New York No. 1 Lake Park',
        description: 'nice developer',
      },
      {
        key: '2',
        name: 'Jim Green',
        price: 42,
        category: 'London No. 1 Lake Park',
        description: 'loser',
      },
      {
        key: '3',
        name: 'Joe Black',
        price: 32,
        category: 'Sydney No. 1 Lake Park',
        description: 'cool teacher',
      },
    ];
  return (
    <div>
         <section className="home-section">
      <Breadcrumb>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item>Products</Breadcrumb.Item>
      </Breadcrumb>
      <div className="home-content" style={{ padding: 40 }}>
        <Title level={2}>PRODUCTS LIST</Title>
        <Button type="primary" style={{ marginBottom: 16 }} ghost>
          <NavLink to={"add"}>Add Product</NavLink>
        </Button>
        <Table dataSource={data} columns={columns} />
      </div>
    </section>
    </div>
  )
}

export default ProductList