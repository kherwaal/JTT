// users.js
const users = [
    { id: 'U52nr0EL', name: 'Syam' },
    { id: '3GI4v66w', name: 'Ram' },
    // Add more users as needed
];

function getUserById(id) {
    return users.find(user => user.id === id);
}
