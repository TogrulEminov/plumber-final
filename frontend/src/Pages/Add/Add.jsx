import React from "react";
import "./_Add.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from "react";
import { mainContext } from "./../../Context/Context";
import { schema } from './../../Schema/AddForm';
import {Helmet} from "react-helmet";
const Add = () => {
  const { state, handleChange, postData } = useContext(mainContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    postData();
  };

  return (
    <div className="addPage">
         <Helmet>
                <title>Add</title>
            </Helmet>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 addForm">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="allInput">
                <div className="inputLabel">Name</div>
                <input
                  type="text"
                  name="name"
                  {...register("name")}
                  placeholder="Enter name ..."
                  value={state.name}
                  onChange={handleChange}
                />
                {errors.name && <p>This name is required</p>}
              </div>

              <div className="allInput">
                <div className="inputLabel">Image Url</div>
                <input
                  type="url"
                  name="url"
                  {...register("url")}
                  placeholder="Enter image adress ..."
                  value={state.url}
                  onChange={handleChange}
                />
                {errors.url && <p>This url is required</p>}
              </div>
              <div className="allInput">
                <div className="inputLabel">Price</div>
                <input
                  type="number"
                  name="price"
                  {...register("price")}
                  placeholder="Enter price ..."
                  value={state.price}
                  onChange={handleChange}
                />
                {errors.url && <p>This price is required</p>}
              </div>
              <div className="allInput">
                <div className="inputLabel">Description</div>
                <textarea
                  name="description"
                  {...register("description")}
                  placeholder="Enter description ..."
                  value={state.description}
                  onChange={handleChange}
                ></textarea>
                {errors.description && <p>This description is required</p>}
              </div>
              <button>Add to data</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
