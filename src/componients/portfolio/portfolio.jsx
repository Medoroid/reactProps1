import React, { useEffect, useState } from 'react'
import Child from '../Child/Child'
export default function Portfolio() {
  const users = [
    { id: 1, username: 'John Doe', job: 'Engineer', age: 30 },
    { id: 2, username: 'Jane Smith', job: 'Designer', age: 25 },
    { id: 2, username: 'Jane Smith', job: 'Designer', age: 25 },
    { id: 2, username: 'Jane Smith', job: 'Designer', age: 25 },
    { id: 2, username: 'Jane Smith', job: 'Designer', age: 25 },
    { id: 2, username: 'Jane Smith', job: 'Designer', age: 25 },
    { id: 3, username: 'Mark Brown', job: 'Developer', age: 28 }
  ];
function deleteUser(){
  console.log("delete")
}
  return (
    <div>
      <h1>Users List</h1>
      {/* تمرير بيانات كل مستخدم إلى المكون UserCard */}
      {users.map((user) => (
        <Child
          key={user.id} // المفتاح الفريد
          username={user.username}
          job={user.job}
          age={user.age}
          func={()=>{deleteUser}}
        />

      ))}
    </div>
  );
}
