# Surveyform_BDIplus
This web application allows users to submit feedback on a product through a simple survey form.

1.Install backend dependencies
2.Set up the MongoDB connection
  - Open `index.js` in the project root.
  - Locate the MongoDB connection string.
3.Start the server:
    node index.js
    The server will run on http://localhost:3000.
4.Install frontend dependencies
    cd client
    npm start
    The application will be accessible at http://localhost:3000.

A) The database is hosted on MongoDB Atlas.MongoDB is employed to store feedback data submitted through the product feedback survey.

B) The database name is "Database1" and UserName Represents the name of the user providing feedback.
   Rating Represents the numerical rating given to the product (1-5).
   Features Represents an array of strings indicating the features the user liked.
   ProductCategory Represents the selected product category from the dropdown menu.
