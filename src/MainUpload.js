import React, { useState } from 'react';
import DataDisplay from './DataDisplay';
import Commercials from './Commercials';
import News from './News';
import Adv from './Adv';
import SaleB from './SaleB';
import firebase from "./firebase";
import UPc from './UPc';


const Page = () => {
    const [formData, setFormData] = useState({});
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [fileList, setFileList] = useState([]);

  
    const handleFormSubmit = (data) => {
      setFormData(data);
    };

    const handleFileUpload = (files) => {
      setFileList(files);
    };



      const handleFinalSubmit = () => {

    
        const storageRef = firebase.storage().ref("/files");
        fileList.forEach((file) => {
            const fileRef = storageRef.child(file.name);
            fileRef.put(file);
        });

        alert('both uploaded successfully!');
    
    
      };
  
  
    return (
      <div className="min-h-screen bg-gray-200 p-8 ">
        <div className="flex justify-center">
          <button
            className="bg-rv100 font-semibold text-white px-4 py-2 rounded-lg mr-4"
            onClick={() => setIsPopupOpen("name")}
          >
            Sale Brochure
          </button>
          <button
            className="bg-rv100 font-semibold text-white px-4 py-2 rounded-lg mr-4"
            onClick={() => setIsPopupOpen("email")}
          >
            News Articles
          </button>
          <button
            className="bg-rv100 font-semibold  text-white px-4 py-2 rounded-lg mr-4"
            onClick={() => setIsPopupOpen("Phone")}
          >
            Adverstisements
          </button>
          <button
            className="bg-rv100 font-semibold text-white px-4 py-2 rounded-lg"
            onClick={() =>setIsPopupOpen("commercials")}
            >
            Commercials
            </button>
            </div>
            <SaleB
            isOpen={isPopupOpen === "name"}
            onClose={() => setIsPopupOpen(false)}
            onSubmit={handleFormSubmit}
            />
            <News
            isOpen={isPopupOpen === "email"}
            onClose={() => setIsPopupOpen(false)}
            onSubmit={handleFormSubmit}
            />
            <Adv
            isOpen={isPopupOpen === "Phone"}
            onClose={() => setIsPopupOpen(false)}
            onSubmit={handleFormSubmit}
            />
            <Commercials
            isOpen={isPopupOpen === "commercials"}
            onClose={() => setIsPopupOpen(false)}
            onSubmit={handleFormSubmit}
            
            />

              {!isPopupOpen && (
              <UPc onFileChange={handleFileUpload} fileList={fileList} />
            )}

            {!isPopupOpen && ( 
            <DataDisplay data={formData}       onFinalSubmit={handleFinalSubmit}
            />
            )}
            </div>
            );
            };
            
            export default Page;