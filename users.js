const users = [
      { id: "raghu", name: "Raghunath", refNum: "24800" },
   
];

function getUserById(id) {
    return users.find(user => user.id === id);
}
