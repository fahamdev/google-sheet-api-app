import React from 'react';

const UserList = ({ users }) => {
  return (<>
    <h2>User List</h2>
    <div className="ui relaxed divided list">
      {users && users.map((user) => <div key={user[2]} className="item">
        <div className="content">
          <p className="header">{user[0]}</p>
          <p className="description">{user[1]}</p>
        </div>
      </div>
      )}
    </div>
  </>);
};

export default UserList;
