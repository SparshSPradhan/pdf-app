import React from "react";

const ListView = ({ pdfs, onSelect }) => {
  return (
    <div className="list-view">
      <h2>Available PDFs</h2>
      <ul>
        {pdfs.map((pdf) => (
          <li key={pdf.id} onClick={() => onSelect(pdf)}>
            <img src={pdf.thumbnail} alt={`${pdf.title} cover`} />
            <div>
              <h3>{pdf.title}</h3>
              <p>Author: {pdf.author}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;
