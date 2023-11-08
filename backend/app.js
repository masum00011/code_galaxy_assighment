// backend/app.js
const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors"); // Import the cors middleware

app.use(cors()); // Enable CORS for all routes

const userList = [
  {
    id: 1,
    name: "Native",
    instructor: "John Doe", // Name of the course instructor
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP0EJiIsVBA8K7SJBjSqMGhSaJsoIcLJyFJg&usqp=CAU", //Link to the course thumbnail
    duration: "8 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity withReact"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
    ],
  },
  {
    id: 2,
    name: " React",
    instructor: "John Doe", // Name of the course instructor
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqfacCQhC3h6m9skEvWk75mx4YV2_GxYJNfw&usqp=CAU", //Link to the course thumbnail
    duration: "8 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity withReact"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
    ],
  },
  {
    id: 3,
    name: "Javascripts",
    instructor: "John Doe", // Name of the course instructor
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqfacCQhC3h6m9skEvWk75mx4YV2_GxYJNfw&usqp=CAU", //Link to the course thumbnail
    duration: "8 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity withReact"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
    ],
  },
  {
    id: 4,
    name: "nodejs",
    instructor: "John Doe", // Name of the course instructor
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqfacCQhC3h6m9skEvWk75mx4YV2_GxYJNfw&usqp=CAU", //Link to the course thumbnail
    duration: "8 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity withReact"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
    ],
  },
];




app.get('/api/v1/user', (req, res) => {
  const searchName = req.query.name;
  const page = parseInt(req.query.page) || 1; 
  const pageSize = parseInt(req.query.pageSize) || 10;

  let filteredUsers = userList;

  if (searchName) {
    filteredUsers = userList.filter(user => user.name.toLowerCase().includes(searchName.toLowerCase()));
    if (filteredUsers.length === 0) {
      return res.status(404).json({ error: 'No users found with the given name' });
    }
  }

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const usersOnPage = filteredUsers.slice(startIndex, endIndex);

  res.json(usersOnPage);
});


app.get('/api/v1/user/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = userList.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});


app.post('/api/v1/createUser', (req, res) => {
  try {
    const { email, phone, website, linkdin, skype, photo, userid, fullname } = req.body;

    if (!fullname) {
      return res.status(400).json({ message: 'Fullname is required in the request body' });
    }

    // Here, you can handle the posted data, for example, by saving it to a database or performing any other necessary operations.

    const newUser = {
      fullname,
      email,
      phone,
      website,
      linkdin,
      skype,
      photo,
      userid,
    };

    // For this example, we'll just send back the received data.
    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while creating the user' });
  }
});





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
