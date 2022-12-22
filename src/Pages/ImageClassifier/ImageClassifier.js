import React, { useState } from "react";import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller } from "react-hook-form";

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
    <FormProvider {...methods}>
      <div className="w-25 flex justify-center	mt-20">
        <div className="artboard artboard-horizontal phone-3 bg-slate-100	items-center">
          <h2 className="text-5xl	 mb-10	">Image Classifier Interface</h2>
          <div>
            {/* Image Upload  */}
            <button className="btn btn-danger m-2">
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
              className="btn btn-danger m-2" onClick={()=>{
                setImageName('');
                setPreviewImage('');
              }}
            >
              Reset
            </button>
          </div>

          <div className="grid grid-cols-2 p-4">
            <div className="pl-20  ">
              <div className="flex justify-center sm:justify-start flex-wrap -mx-16">
                <img
                  label="Image"
                  src={previewImage}
                  alt="ClassifiedImage"
                  style={{ width: "350px", height: "230px" }}
                />
              </div>{" "}
            </div>
            <div className="">
              <p>
                {" "}
                <b>Image Name :</b> {imageName}
              </p>
              <p>
                {" "}
                <b>Image Size :</b>
              </p>
              <div>
                {" "}
                <button className="btn btn-primary m-2">Label-1</button>
                <button className="btn btn-danger m-2">Label-2</button>
                <button className="btn btn-secondary m-2">Label-3</button>
              </div>
              <div>
                {" "}
                <button className="btn btn-primary m-2">Label-4</button>
                <button className="btn btn-danger m-2">Label-5</button>
                <button className="btn btn-secondary m-2">Label-6</button>
              </div>
              <div>
                <p>Label 1: Size ,Label 2: Size </p>
                <p>Label 3: Size ,Label 4: Size </p>
                <p>Label 5: Size ,Label 6: Size </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
     
    
  );
};

export default ImageClassifier;
