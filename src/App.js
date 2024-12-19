// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";

// const App = () => {
//   const [pdfs, setPdfs] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredPdfs, setFilteredPdfs] = useState([]);

//   useEffect(() => {
//     // Fetch PDFs from API
//     axios
//       .get("https://api.npoint.io/dee51ea017d20efdfcc8")
//       .then((response) => {
//         setPdfs(response.data);
//         setFilteredPdfs(response.data); // Initialize filtered list
//       })
//       .catch((error) => console.error("Error fetching PDFs:", error));
//   }, []);

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//     const filtered = pdfs.filter((pdf) =>
//       pdf.author && pdf.author.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredPdfs(filtered);
//   };

//   const handleClick = (link) => {
//     window.open(link, "_blank"); // Open the link in a new tab
//   };

//   return (
//     <div className="App">
//       <h1>PDF Library</h1>
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={(e) => handleSearch(e.target.value)}
//         placeholder="Search by title"
//         className="search-bar"
//       />
//       <div className="pdf-list">
//         {filteredPdfs.map((pdf) => (
//           <div
//             key={pdf.id}
//             className="pdf-item"
//             onClick={() => handleClick(pdf.link)} // Handle click on the PDF box
//           >
//             <img src={pdf.thumbnail} alt={`${pdf.title} cover`} />
//             <h3>{pdf.title}</h3>
//             <p>{pdf.author}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;





import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [pdfs, setPdfs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPdfs, setFilteredPdfs] = useState([]);

  useEffect(() => {
    // Fetch PDFs from API
    axios
      .get("https://api.npoint.io/dee51ea017d20efdfcc8")
      .then((response) => {
        setPdfs(response.data);
        setFilteredPdfs(response.data); // Initialize filtered list
      })
      .catch((error) => console.error("Error fetching PDFs:", error));
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = pdfs.filter((pdf) =>
      pdf.author && pdf.author.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPdfs(filtered);
  };

  const handleClick = (link) => {
    window.open(link, "_blank"); // Open the link in a new tab
  };

  return (
    <div className="App">
      <div className="background-video-container">
        <video autoPlay muted loop className="background-video">
          <source src="path-to-your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <h1 className="heading">PDF Library</h1>
          <div className="search-bar-container">
            <input
              type="text"
              className="search-bar"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search by author"
            />
            <div className="search-bar-icon">
              <i className="fa fa-search"></i>
            </div>
          </div>
          <div className="pdf-list">
            {filteredPdfs.map((pdf) => (
              <div
                key={pdf.id}
                className="pdf-item"
                onClick={() => handleClick(pdf.link)} // Handle click on the PDF box
              >
                <img src={pdf.thumbnail} alt={`${pdf.title} cover`} />
                <h3>{pdf.title}</h3>
                <p>{pdf.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
