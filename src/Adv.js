import React, { useState } from "react";

const Adv = ({ isOpen, onClose, onSubmit }) => {
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

        <label class="block text-rv100  font-bold  mb-1 md:mb-0 pr-4" for="publisher">
          Publisher
        </label>
      <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              name="Publisher"
              id="Publisher"
              onChange={handleChange}
            />
      </div>
    </div>

    <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block text-rv100 font-bold  mb-1 md:mb-0 pr-4" for="relation">
        Relation
        </label>
          <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              name="Relation"
              id="Relation"
              onChange={handleChange}
            />
    </div>
    <div className="w-full md:w-1/2 px-3">

        <label class="block text-rv100  font-bold  mb-1 md:mb-0 pr-4" for="identifier">
          Identifier
        </label>
      <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              name="Identifier"
              id="Identifier"
              onChange={handleChange}
            />
      </div>
    </div>


    <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block text-rv100 font-bold  mb-1 md:mb-0 pr-4" for="type">
        Type
        </label>
          <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              name="Type"
              id="Type"
              onChange={handleChange}
            />
    </div>
    <div className="w-full md:w-1/2 px-3">

        <label class="block text-rv100  font-bold  mb-1 md:mb-0 pr-4" for="source">
          Source
        </label>
      <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              name="Source"
              id="Source"
              onChange={handleChange}
            />
      </div>
    </div>


    <div className="w-full">
    <label class="block text-rv100  font-bold  mb-1 md:mb-0 pr-4" for="File">
          Upload
        </label>
      <input
              className="border border-gray-400 p-2 w-full"
              type="file"
              name="File"
              id="File"
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

export default Adv;