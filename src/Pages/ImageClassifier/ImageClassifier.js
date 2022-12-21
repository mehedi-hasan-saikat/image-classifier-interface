import React, { useState } from "react";

const ImageClassifier = () => {
  const [image, setImage] = useState("");
  return (
    <div className="w-25 flex justify-center	mt-20">
      <div className="artboard artboard-horizontal phone-3 bg-slate-100	items-center">
        <h2 className="text-5xl	 mb-10	">Image Classifier Interface</h2>
        <div className="w-25 justify-start">
          <input
            type="file"
            className="file-input file-input-bordered file-input-primary w-25 max-w-xs"
          />
        </div>
        <div className="grid grid-cols-2 p-4">
          <div className="p-10 border-2 border-rose-500 ">
            <img src="" alt="Image" className="w-100 h-100 " />
          </div>
          <div className="">
            <p> Image Name :</p>
            <p> Image Size :</p>
            <div >
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
  );
};

export default ImageClassifier;
