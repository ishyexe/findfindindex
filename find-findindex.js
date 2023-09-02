

function findUserByUsername(usersArray, username) {
  return usersArray.find(function (users) {
    return users.username === users;
  });
}



function removeUser(usersArray, username) {
  let foundIndex = usersArray.findIndex(function (user) {
    return user.username === username;
  });
  if (foundIndex === -1) return;

  return usersArray.splice(foundIndex, 1)[0];
}
