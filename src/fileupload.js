import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
//import firebase from "./firebase";

import { ImageConfig } from './config/ImageConfig'; 
import UploadIcon from './assets/UploadIcon.png';

const UploadComp = props => {

    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
    }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }
    

/*    const handleFileSubmit = () => {
        const storageRef = firebase.storage().ref("/files");
        fileList.forEach((file) => {
            const fileRef = storageRef.child(file.name);
            fileRef.put(file);
        });
        alert('Files uploaded successfully!');
        setFileList([]);
        props.onFileChange([]);
    };
*/






    
/* const handleFileSubmit = () => {
        const storageRef = firebase.storage().ref("/files");
        storageRef.put(fileList);
        alert('Form data submitted successfully!');
      };
 */

    return (
        <>
            <div className="flex flex-wrap   w-full bg-white mt-2">
                <div 
                    ref={wrapperRef}
                    className="relative w-40 h-40 border-2 border-dashed border-gray-300 rounded-lg bg-gray-100 hover:opacity-60 focus:opacity-60  p-4"
                    style={{ zIndex: 0 }}
                    onDragEnter={onDragEnter}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <img src={UploadIcon} alt="" className="w-16 mx-auto mb-4" />
                        <p className="text-gray-500 font-semibold">Drag & Drop your files here</p>
                    </div>
                    <input type="file" value="" onChange={onFileDrop} className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"/>
                </div>
                {
                    fileList.length > 0 ? (
                        <div className="w-1/2   mx-6">
                            <p className="text-xl font-semibold mb-2">Uploaded Files</p>
                            {
                                fileList.map((item, index) => (
                                    <div key={index} className="flex items-center w-full mb-2 rounded-lg bg-gray-100 p-2">
                                        <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" className="w-8 h-8 mr-2" />
                                        <div className="flex flex-col flex-grow">
                                            <p className="text-sm font-medium">{item.name}</p>
                                            <p className="text-xs text-gray-500">{item.size}B</p>
                                        </div>
                                        <span className="text-gray-500 hover:text-red-600 cursor-pointer" onClick={() => fileRemove(item)}>x</span>
                                    </div>
                                ))
                            }
                          </div>
       /* <button className="bg-rv100 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleFileSubmit}>Upload</button>
        This goes above </div> */
                    ) : null
                }
            </div>

        </>
    );
}


UploadComp.propTypes = {
    onFileChange: PropTypes.func
}

export default UploadComp;
