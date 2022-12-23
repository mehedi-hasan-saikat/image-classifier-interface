import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller } from "react-hook-form";
import './style.css'
import { TextField } from "@material-ui/core";

const schema = yup.object().shape({
  // name: yup.string().required('Name is required')
});
const ImageClassifier = () => {
  const [previewImage, setPreviewImage] = useState();
  const [imageName, setImageName] = useState("");
  console.log(`previewImage`, previewImage);
  const methods = useForm({
    mode: "onChange",
    defaultValues: {},
    resolver: yupResolver(schema),
  });
  const { control } = methods;


 



  return (
    <div className="justify-center p-4">
      <FormProvider {...methods}>
        <div className=" flex justify-center	 ">
          <div >
            <h2 className="text-5xl	 mb-4	 justify-center text-center text-bold">
              Image Classifier Interface
            </h2>
            

            <div className="grid grid-cols-12 p-4">
              <div className="pl-20  col-span-9">
                <div className="flex justify-center sm:justify-start flex-wrap -mx-16">
                  <img
                    label="Image"
                    src={previewImage}
                    alt="ClassifiedImage"
                    style={{ width: "400px", height: "265px" }}
                    id="screenshot" draggable="false"
                  />
         
                </div>{" "}
              </div>
              <div className="pl-10 col-span-3">
              <div className="justify-start text-center flex">
            <button
                className="btn bg-transparent	text-black	 btn bg-transparent	text-black	-danger m-2"
                onClick={() => {
                  setImageName("");
                  setPreviewImage("");
                }}
              >
                Reset
              </button>
              {/* Image Upload  */}
              <button className="btn bg-transparent	text-black	 btn bg-transparent	text-black	-danger m-2">
                {" "}
                <Controller
                  name="image"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <div className="flex w-full flex-row items-center justify-evenly">
                      <div className="flex-col">
                        <label htmlFor="image">
                          <input
                            accept="image/*"
                            className="hidden"
                            id="image"
                            type="file"
                            onChange={async (e) => {
                              const reader = new FileReader();

                              reader.onload = () => {
                                if (reader.readyState === 2) {
                                  setPreviewImage(reader.result);
                                }
                              };
                              reader.readAsDataURL(e.target.files[0]);
                              const file = e.target.files[0];
                              console.log(`file`, file);
                              setImageName(file.name);
                              onChange(file);
                            }}
                          />
                          Upload
                        </label>
                      </div>
                    </div>
                  )}
                />
              </button>
              {/* Image Reset  */}
              <button
                className="btn bg-transparent	text-black	 btn bg-transparent	text-black	-danger m-2"
                onClick={() => {
                
                }}
              >
                Save
              </button>
            </div>



<div>
<Controller
				name="name"
				control={control}
        className="w-full"
				render={({ field }) => {
					return (
						<TextField
							{...field}
							label="Image Details"
							id="name"
							variant="outlined"
							InputLabelProps={field.value && { shrink: true }}
							fullWidth
						/>
					);
				}}
			/>


 
</div>

               
                <div className="flex">
                  {" "}
                  <button className="btn bg-transparent	text-black	  border-orange-500 m-2">Label-1</button>
                  <button className="btn bg-transparent	text-black	 border-red-500 m-2">Label-2</button>
                </div>
                <div className="flex">
                  {" "}
                  <button className="btn bg-transparent	text-black	 border-pink-500 m-2">Label-3</button>
                  <button className="btn bg-transparent	text-black	 border-blue m-2">Label-4</button>
                </div>
                <div className="flex">
                  {" "}
                  <button className="btn bg-transparent	text-black	 border-green-500 m-2">Label-5</button>
                  <button className="btn bg-transparent	text-black	 border-cyan-500 m-2">Label-6</button>
                </div>
                <div className="whitespace-nowrap	">Image Size : </div>
                <div className="whitespace-nowrap	">Image Format  : </div>
                <div className="pb-5 pt-5 flex">
                  <p className="whitespace-nowrap	">Label Size: </p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </FormProvider>
    </div>
  );
};

export default ImageClassifier;
