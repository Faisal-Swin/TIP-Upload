import React from 'react';
import firebase from "./firebase";

const DataDisplay = ({ data = {}, props }) => {    

  const TSubmit = () => {
    const messagesRef = firebase.database().ref("messages");
    messagesRef.push(data);
    alert('Form data submitted successfully!');
    props.onFinalSubmit();
  };

  const entries = Object.entries(data);
  return (
    <div className="flex flex-col  bg-gray-200 w-1/2 mx-auto mt-4"> 
    {Object.entries(data).length === 0 ? (
        <h1 className="text-lg font-bold mb-4">No Data Added</h1>
      ) : (
        <>
          <h2 className="text-lg font-bold mb-4">Entered Data:</h2>
          {entries.map(([key, value]) => (
            <p key={key}>
              <span className="font-bold">{key}: </span>
              {value}
            </p>
            
          ))}
                <button
            className="bg-rv100 font-semibold text-white px-4 py-2 rounded-lg mt-4 w-1/5"
            onClick={TSubmit}
          >
             Submit
          </button>
        </>
      )}


    </div>
  );
};

export default DataDisplay;
