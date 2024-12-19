# PDF Browsing Application  

This is a visually appealing and user-friendly React.js application that allows users to browse a collection of PDFs with ease. The application offers features such as a list view, a reader view, and a search bar for finding PDFs effortlessly.  

## Features  
- **List View:** Displays PDF titles, authors, and cover thumbnails.  
- **Reader View:** Enables users to read the selected PDF directly.  
- **Search Bar:** Allows users to search for PDFs by name.  
- **Responsive Design:** Optimized for various screen sizes.  

## Live Demo  
[View the Application on Vercel](#)  

## Installation and Setup  

1. Clone the repository:  
   
   git clone https://github.com/your-username/pdf-app.git
   
2- Navigate to the project directory:


cd pdf-app

3- Install dependencies:


npm install

4- Start the development server:

npm start

5- Open the application in your browser at http://localhost:3000.

API Used-

The application fetches PDF data from the following API:
https://api.npoint.io/dee51ea017d20efdfcc8

Components
1. PDFList
Displays a list of PDFs with titles, authors, and thumbnails.

2. PDFReader
Provides a detailed view for reading the selected PDF.

3. SearchBar
Allows users to search for PDFs by name.

Assumptions-

All PDFs have a valid link and displayable metadata (title, author, thumbnail).
If metadata (author or published date) is missing, it is replaced with "N/A" in the UI.

Technologies Used-

Frontend: React.js, HTML5, CSS3, Bootstrap5
State Management: React Hooks (useState, useEffect)
Styling: Responsive design using CSS and Bootstrap

How to Use-

1- Browse the list of PDFs on the home page.
2- Use the search bar to filter PDFs by name.
3- Click on a PDF to open the reader view.
4- View the selected PDF in a new tab.


Deployment-

The application is hosted on Vercel.
View the Live Application - https://pdf-app-sparsh.vercel.app/

Future Enhancements-

Add categories for PDFs.
Implement user authentication for a personalized experience.
Allow users to upload and manage their own PDFs.

Contact-

If you have any questions or feedback, please feel free to contact me at sparshmillion11@gmail.com.

