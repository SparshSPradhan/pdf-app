import React from "react";

const ReaderView = ({ pdf, onBack }) => {
  return (
    <div className="reader-view">
      <button onClick={onBack}>Back</button>
      <h2>{pdf.title}</h2>
      <iframe
        src={pdf.url}
        title={pdf.title}
        width="100%"
        height="600px"
      ></iframe>
    </div>
  );
};

export default ReaderView;
