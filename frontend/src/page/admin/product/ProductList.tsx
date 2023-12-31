import React from "react";
import { Table, Space, Typography, Button, Breadcrumb, Image } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import {
  useGetProductsQuery,
  useRemoveProductMutation,
} from "../../../api/product";
import swal from "sweetalert";

const { Text, Title } = Typography;

type Props = {};

const ProductList = (props: Props) => {
  const { data, isLoading } = useGetProductsQuery();
  const [removeProduct, { isSuccess }] = useRemoveProductMutation();
  // console.log("dataRe" ,dataRe);

  const removeConfirm = async (product: any) => {
    try {
      swal({
        title: "Are you sure you want to delete?",
        text: "You cannot undo after deleting!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            removeProduct(product._id);
            swal("You have successfully deleted", {
              icon: "success",
            });
          }
        })
        .catch(() => {
          swal("Error! Deleting failed products", {
            icon: "error",
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

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
      title: "quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Image",
      dataIndex: "images",
      key: "images",
      render: (images: string) => (
        <a>
          <img src={images} alt="" width={200} />
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
      title: "Discount",
      dataIndex: "discount",
      key: "discount",
    },
    {
      title: "Action",
      key: "action",
      render: (record: any) => (
        <Space size="middle">
          <NavLink to={"/admin/products/edit/" + record?.slug}>
            <EditOutlined />
          </NavLink>
          <Text type="danger" onClick={() => removeConfirm(record)}>
            <DeleteOutlined />
          </Text>
        </Space>
      ),
    },
  ];
  const dataProducts = data?.data?.map((item: any, index: any) => {
    return {
      ...item,
      category: item?.category?.name,
      images: item.images[0],
      key: index + 1,

      // _id: item._id,
      // name: item.name,
      // price: item.price,
      // category: item.category.name,
      // description: item.description,
      // image: item.image,
    };
  });

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
          {isLoading ? (
            <div>...IsLoading</div>
          ) : (
            <Table dataSource={dataProducts} columns={columns} />
          )}
          {/* <Table dataSource={data} columns={columns} /> */}
        </div>
      </section>
    </div>
  );
};

export default ProductList;
