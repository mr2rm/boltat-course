import React from "react";
import App from "./App";
import UserList from "./UserList";
import families from "../../server/data.json";

export const Example1 = () => <UserList users={families} />;
export const Example2 = () => <App />;
export default UserList;
