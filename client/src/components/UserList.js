import React from 'react';

const UserList = () => {
const users = [
  [
    "abc3 def",
    "ab3c@mail.com",
    "1/27/2022, 5:44:18 PM"
  ],
  [
    "string",
    "asd@mail.com",
    "1/27/2022, 5:48:29 PM"
  ],
  [
    "string",
    "asd@mail.com",
    "1/27/2022, 5:49:11 PM"
  ],
  [
    "faham",
    "faham@mail.com",
    "1/27/2022, 6:01:34 PM"
  ]
]
  return <>
  <h2>User List</h2>
  <div class="ui relaxed divided list">
   {users && users.map(
      (user) => <div class="item">
      <div class="content">
        <p class="header">{user[0]}</p>
        <p class="description">{user[1]}</p>
      </div>
    </div>
   ) }
  </div>
  </>;
};

export default UserList;
