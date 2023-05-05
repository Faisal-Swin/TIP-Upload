import React, { useState } from "react";

const News = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    onClose();
  };

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
        <label class="block text-rv100 font-bold  mb-1 md:mb-0 pr-4" for="coverage">
        Coverage
        </label>
          <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              name="Coverage"
              id="Coverage"
              onChange={handleChange}
            />
    </div>
    <div className="w-full md:w-1/2 px-3">

        <label class="block text-rv100  font-bold  mb-1 md:mb-0 pr-4" for="language">
          Language
        </label>
      <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              name="Language"
              id="Language"
              onChange={handleChange}
            />
      </div>
    </div>

    <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block text-rv100 font-bold  mb-1 md:mb-0 pr-4" for="date">
        Date
        </label>
          <input
              className="border border-gray-400 p-2 w-full"
              type="Date"
              name="Date"
              id="Date"
              onChange={handleChange}
            />
    </div>
    <div className="w-full md:w-1/2 px-3">

        <label class="block text-rv100  font-bold  mb-1 md:mb-0 pr-4" for="subject">
          Subject
        </label>
      <input
              className="border border-gray-400 p-2 w-full"
              type="Subject"
              name="Subject"
              id="Subject"
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





    <div className="flex justify-start">
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

export default News;