// Empty array to store users
const users = [];

// adds user based on the username and room input they provide
const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  //Checks if user already exists in that room
  const existingUser = users.find((user) => user.room === room && user.name === name);

  // validation
  if(!name || !room) return { error: 'Username and room are required.' };
  if(existingUser) return { error: 'Username is taken.' };

  // deconstructed user object-
  const user = { id, name, room };

  // adds user to array
  users.push(user);

  return { user };
}

// User methods
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if(index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };