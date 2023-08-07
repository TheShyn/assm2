import React from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Space, Table, Typography } from "antd";
import { NavLink } from "react-router-dom";
import { useGetCategoriesQuery, useRemoveCategoryMutation } from "../../../api/categories";
import swal from "sweetalert";

const { Text, Title } = Typography;

type Props = {};

const CategoryList = () => {
  const { data: categories, isLoading } = useGetCategoriesQuery();
  const [removeCategory] = useRemoveCategoryMutation();
  
  const confirm = async (record: any) => {
    try {
      swal({
        title: "Are you sure you want to delete?",
        text: "You cannot undo after deleting!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          removeCategory(record._id).unwrap().then(() => {
              swal("You have successfully deleted", {
                icon: "success",
              })})
            .catch(() => {
              swal(
                "Deletion failed, Please delete all products in this category !",
                {
                  icon: "error",
                }
              );
            });
        }
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
    },
    {
      title: "Action",
      key: "action",
      render: (record: any) => (
        <Space size="middle">
          <NavLink to={"/admin/category/edit/" + record?._id}>
            <EditOutlined />
          </NavLink>
          {record._id !== "64ca34ed3dd995caf0f8d3cb" ? (
            <Text type="danger" onClick={() => confirm(record)}>
              <DeleteOutlined />
            </Text>
          ) : (
            ""
          )}
        </Space>
      ),
    },
  ];
  const data = categories?.data?.map((item: any, index: any) => {
    return {
      key: index + 1,
      _id: item._id,
      name: item.name,
    };
  });
  console.log("categories", categories);


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
        {isLoading ? (
          <div>...IsLoading</div>
        ) : (
          <Table dataSource={data} columns={columns} />
        )}
      </div>
    </section>
  );
};

export default CategoryList;
