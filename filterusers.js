// Create a filtered array of user objects with a specific role

const users = [
  { id: 1, name: "Natalia", role: "tester" },
  { id: 2, name: "Kris", role: "developer" },
  { id: 3, name: "Olya", role: "tester" },
  { id: 4, name: "Max", role: "manager" },
  { id: 5, name: "Anna", role: "developer" },
];

const filteredUsers = users.filter((user) => user.role === "tester");

console.log(filteredUsers);
