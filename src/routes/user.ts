import { Router } from "express";

// data (it acts like your DataBase)
const users = [
  { id: 1, name: "Andrea", age: 3 },
  { id: 2, name: "Tom", age: 4 },
  { id: 3, name: "Gabriel", age: 5 },
];


// controllers
const router = Router();

// get all users. the full endpoint of this becomes /users
router.get("/", (req, res) => {
  res.json(users);
});



// get user by id. the full endpoint of this becomes /users/:id
router.get("/:id", (req, res) => {
  const user = users.find((user) => user.id === Number(req.params.id));
  res.json(user);
});


/**
 * TODO:
 * 1. Create new user
 * 2. Delete user
 * 3. Update user information
*/


export default router;
