import React from "react";
import Parent from "../props/Parent";
import GuestList from "../state";
import UserSearch from "../state/UserSearch";
import Events from "../events";
import RefExample from "../ref";

const App: React.FC = () => {
  return (
    <div>
      <Parent />
      <GuestList />
      <UserSearch />
      <Events />
      <RefExample />
    </div>
  );
};

export default App;
