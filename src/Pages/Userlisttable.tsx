import React from "react";
import ReusableTable from "../component/Table";
import { getUsersName } from "../Api/Reactquery";

const Userlisttable = () => {
  const userDetails = getUsersName();
  return (
    <div>
      <ReusableTable
        title="user Table"
        queryResult={userDetails}
        state={false}
      />
    </div>
  );
};

export default Userlisttable;
