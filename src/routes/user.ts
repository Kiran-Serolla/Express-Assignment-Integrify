import { Router } from "express";

// data
const users = [
  { id: 1, name: "Andrea", age: 3 },
  { id: 2, name: "Tom", age: 4 },
  { id: 3, name: "Gabriel", age: 5 },
];

//code here
const router = Router();

// get all users
router.get("/", (req, res) => {
  res.json(users);
});

// services
const getUser = (userId: number) => {
  // return the user by userId from users
  const user = users.find((user) => user.id === userId);
  return user;
};

// controller
// get user by id
router.get("/:id", (req, res) => {
  const user = users.find((user) => user.id === Number(req.params.id));
  res.json(user);
});

// create new user

// delete user

// update user information

export default router;
