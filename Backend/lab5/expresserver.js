import express from 'express';
const app = express();
app.use(express.json());

const userdata = [
  {
    id: 101,
    name: 'cm',
    email: 'cm@example.com',
  },
];

app.get("/user", (req, res) => {
  res.status(200).json({
    message: "welcome to express server",
    data: userdata,
  });
});

app.get("/msg", (req, res) => {
  res.status(200).json({
    message: "Hello is welcome to my server",
  });
});
app.post("/create", (req, res) => {
  const { id, name, email } = req.body;
  const newUser = {
    id,
    name,
    email,
  };
  userdata.push(newUser);
  res.status(201).json({
    message: "User created successfully",
    user: newUser
  });
});


app.put("edit/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const userIndex = userdata.findIndex((user) => user.id === parseInt(id),);
  if (userIndex !== -1) {
    userdata[userIndex].name = name;
    userdata[userIndex].email = email;
    res.status(200).json({
      message: "User updated successfully",
      user: userdata[userIndex],
    });
  }
});


  app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });