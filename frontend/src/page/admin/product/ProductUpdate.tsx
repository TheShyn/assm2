import { yupResolver } from "@hookform/resolvers/yup";
import { Breadcrumb, Typography } from "antd";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useGetCategoriesQuery } from "../../../api/categories";
import {
  useGetProductBySlugQuery,
  useUpdateProductMutation,
  useUploadImageMutation,
} from "../../../api/product";

type FormType = {
  _id: string;
  name: string;
  price: number;
  discount: number;
  quantity: number;
  description: string;
  images: any;
  category: string;
};

const { Title, Text } = Typography;
const schema = yup.object().shape({
  name: yup
    .string()
    .required("* Required to enter product name")
    .min(6, "* At least 6 characters")
    .trim(),
  price: yup
    .string()
    .required("* Required to enter product price")
    .test("min", "Please re-enter the price", (price) => Number(price) > 0),
  discount: yup
    .string()
    .required("* Required to enter product discount")
    .test(
      "min",
      "Please re-enter the discount",
      (discount) => Number(discount) > 0
    ),
  quantity: yup
    .string()
    .required("* Required to enter product quantity")
    .test(
      "min",
      "Please re-enter the quantity",
      (quantity) => Number(quantity) > 0
    ),
  description: yup
    .string()
    .required("* Required to enter product description")
    .min(6, "* At least 6 characters")
    .max(255, "* Up to 255 characters")
    .trim(),
  // category: yup.string().required("* Please select a product category"),
});

const ProductUpdate = () => {
  const { id } = useParams();
  const [uploadData, setUploadData] = useState(new FormData());
  const { data: categories, isLoading } = useGetCategoriesQuery();
  const { data, isLoading: loadingData } = useGetProductBySlugQuery(id || "");
  const [uploadImages] = useUploadImageMutation();
  const [updateProduct] = useUpdateProductMutation();
  const navigate = useNavigate();

  console.log("data", data);


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    reset(data?.data);
  }, []);

  const [previewImage, setPreviewImage] = useState<any>();

  const handlePreviewImage = (e: any) => {
    const files = e.target.files
    console.log(files);
    const newUpload = new FormData();
    for (let i = 0; i < files.length; i++) {
      newUpload.append('files', files[i], "files");
    }
    setUploadData(newUpload);
    if (files && files.length > 0) {
      const imageUrls = Array.from(files).map((file: any) => URL.createObjectURL(file));
      setPreviewImage(imageUrls);
    }
  };

  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      const imgs:any = await uploadImages(uploadData)
      const updateData = {
        _id: data._id,
        data: {
          name: data.name,
          category: data.category._id,
          description: data.description,
          images: imgs?.data?.secure_urls,
          price: data.price,
          discount: data.discount,
          quantity: data.quantity
        }
      };


      await updateProduct(updateData);
      toast.success("Product created successfully, redirect after 2 seconds");
      setPreviewImage(null);
      reset();
      setTimeout(() => navigate("/admin/products"), 2000);
    } catch (error: any) {
      toast.error("Error! Please try again later.");
    }
  };
  useEffect(() => {
    setPreviewImage(data?.data?.images)
  }, [loadingData])
  return (
    <section className="home-section">
      {isLoading ? <div>...Loading</div> : ""}
      <Breadcrumb>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item>Products</Breadcrumb.Item>
        <Breadcrumb.Item>Product Update</Breadcrumb.Item>
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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Product's name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please enter the name of the product"
              autoComplete="off"
              {...register("name")}
            />
            <Text type="danger">{errors.name?.message}</Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Please enter the price of the product"
              autoComplete="off"
              {...register("price")}
            />
            <Text type="danger">{errors.price?.message}</Text>
          </Form.Group>
          {/* <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Select {...register("category")}>
                <option value={data?.data?.category}>Select a category</option>
                {categories?.data?.map((item: any, index: any) => (
                  <option key={index} value={item._id}>
                    {item.name}
                  </option>
                ))}
              </Form.Select>
              <Text type="danger">{errors.category?.message}</Text>
            </Form.Group> */}
          <Form.Group className="mb-3 my-2">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Please enter the quantity of the product"
              autoComplete="off"
              {...register("quantity")}
            />
            <Text type="danger">{errors.quantity?.message}</Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Discount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Please enter the discount of the product"
              autoComplete="off"
              {...register("discount")}
            />
            <Text type="danger">{errors.discount?.message}</Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Please enter product description"
              autoComplete="off"
              style={{ height: "100px" }}
              {...register("description")}
            />
            <Text type="danger">{errors.description?.message}</Text>
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              {...register("images")}
              onChange={(e) => handlePreviewImage(e)}
            />
            {/* <Text type="danger">{errors.image?.message}</Text> */}
          </Form.Group>
          <div className="col-span-3">
            <label className="block text-sm font-medium text-gray-700">
              Preview Image
            </label>
            <div className="mt-1">
              <div className="flex flex-wrap gap-4">
                {previewImage?.map((imageUrl: any, index: any) => (
                  <img
                    key={index}
                    src={imageUrl}
                    alt={`Preview ${index}`}
                    style={{ maxWidth: '150px', maxHeight: '150px', margin: '5px' }}
                    className="object-cover"
                  />
                ))}
              </div>
            </div>
          </div>
          <Button style={{ marginTop: 20 }} variant="primary" type="submit">
            Update Product
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default ProductUpdate;
