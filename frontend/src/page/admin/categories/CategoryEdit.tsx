import React from "react";

import { Breadcrumb, Typography } from "antd";
import { Form, Button } from "react-bootstrap";
type Props = {};
const { Title, Text } = Typography;

const CategoryEdit = (props: Props) => {
  return (
    <section className="home-section">
      <Breadcrumb>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item>Category</Breadcrumb.Item>
        <Breadcrumb.Item>Category Add</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="home-content"
        style={{
          maxWidth: "70%",
          margin: "auto",
          padding: 40,
        }}
      >
        <Title level={2}>ADD CATEGORY</Title>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Category name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please enter the name of the category"
              id="name"
              autoComplete="off"
              // {...register("name")}
            />
            {/* <Text type="danger">{errors.name?.message}</Text> */}
          </Form.Group>
          <Button style={{ marginTop: 20 }} variant="primary" type="submit">
            Add Category
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default CategoryEdit;
