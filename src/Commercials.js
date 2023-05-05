import React, { useState } from "react";
import UploadComp from "./fileupload";

const Commercials = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    onClose();
  };

  const onFileChange = (files) => {
    console.log(files);
}


  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white rounded-lg p-8">
      <div class="w-full max-w-md mx-auto">
        <h2 className="text-xl text-rv100  font-bold mb-4">Enter Description of Files</h2>
        <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block text-rv100 font-bold  mb-1 md:mb-0 pr-4" for="creater">
        Creator
        </label>
          <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              name="Creator"
              id="Creator"
              onChange={handleChange}
            />
    </div>
    <div className="w-full md:w-1/2 px-3">

        <label class="block text-rv100  font-bold  mb-1 md:mb-0 pr-4" for="title">
          Title
        </label>
      <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              name="Title"
              id="Title"
              onChange={handleChange}
            />
      </div>
    </div>

    <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block text-rv100 font-bold  mb-1 md:mb-0 pr-4" for="source">
        Soruce
        </label>
          <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              name="Soruce"
              id="Soruce"
              onChange={handleChange}
            />
    </div>
    <div className="w-full md:w-1/2 px-3">

        <label class="block text-rv100  font-bold  mb-1 md:mb-0 pr-4" for="rights">
          Rights
        </label>
      <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              name="Rights"
              id="Rights"
              onChange={handleChange}
            />
      </div>
    </div>


    <div className="w-full">
    <label class="block text-rv100  font-bold  mb-1 md:mb-0 pr-4" for="description">
          Description
        </label>
      <textarea
              className="border border-gray-400 p-2 w-full"
              type="text"
              name="Description"
              id="Description"
              onChange={handleChange}
            />
    </div>


   <div className="w-full bg-gray-200">
          <UploadComp onFileChange={onFileChange}/>
    </div>





    <div className="flex justify-start mt-3">
            <button
              type="submit"
              className="mr-2 bg-rv100 text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>

            <button
              type="button"
              className="border border-gray-400 px-4 py-2 rounded-lg"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>

  </form>
    </div>
    </div>
    </div>
  );
};

export default Commercials;