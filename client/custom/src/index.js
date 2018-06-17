fetch('/api/users')
  .then(res => res.json())
  .then(users => {
    alert(`Hello user ${users[0].id}: ${users[0].data}`);
  });