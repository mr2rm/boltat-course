import React from "react";
import UserList from "./UserList";
import families from "../../data.json";

export const Example = () => <UserList users={families} />;
export default UserList;
