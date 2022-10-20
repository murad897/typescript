import React, { useState } from "react";

const users = [
  { name: "Sarah", age: 20 },
  { name: "migel", age: 25 },
  { name: "jason", age: 30 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  return (
    <div>
      UserSearch
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>{user?.name}</div>
    </div>
  );
};

export default UserSearch;
