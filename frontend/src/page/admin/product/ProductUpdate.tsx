import React from "react";

import { Breadcrumb, Typography, Image } from "antd";
// import { useForm, SubmitHandler } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
type Props = {};
const { Title, Text } = Typography;

const ProductUpdate = (props: Props) => {
  return (
    <section className="home-section">
      <Breadcrumb>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item>Products</Breadcrumb.Item>
        <Breadcrumb.Item>Product Add</Breadcrumb.Item>onSubmit
      </Breadcrumb>
      <div
        className="home-content"
        style={{
          maxWidth: "70%",
          margin: "auto",
          padding: 40,
        }}
      >
        <Title level={2}>PRODUCTS ADD</Title>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Product's name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please enter the name of the product"
              autoComplete="off"
            />
            {/* <Text type="danger">{errors.name?.message}</Text> */}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Please enter the price of the product"
              autoComplete="off"
            />
            {/* <Text type="danger">{errors.price?.message}</Text> */}
          </Form.Group>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Select>
              {/* <option value="">Select a category</option>
            {categories?.map((item, index) => (
              <option key={index} value={item._id}>
                {item.name}
              </option>
            ))} */}
            </Form.Select>
            {/* <Text type="danger">{errors.category?.message}</Text> */}
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Please enter product description"
              autoComplete="off"
              style={{ height: "100px" }}
            />
            {/* <Text type="danger">{errors.description?.message}</Text> */}
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              // {...register("image")}
              // onChange={(e) => handlePreviewImage(e)}
            />
            {/* <Text type="danger">{errors.image?.message}</Text> */}
          </Form.Group>
          <div className="col-span-3">
            <label className="block text-sm font-medium text-gray-700">
              Preview Image
            </label>
            <div className="mt-1">
              <Image
                src={
                  // previewImage ||
                  "https://res.cloudinary.com/do9rcgv5s/image/upload/v1669841925/no-image-icon-6_ciydgz.png"
                }
                alt="Preview Image"
                className="h-8 w-full object-cover rounded-md"
                style={{ height: "300px" }}
              />
            </div>
          </div>
          <Button style={{ marginTop: 20 }} variant="primary" type="submit">
            Add Product
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default ProductUpdate;
