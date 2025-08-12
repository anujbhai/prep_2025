import { useEffect, useState } from "react";
import { fetchUsers, type User } from "../../../api";
import Users from "../users";
import { useSearchParams } from "react-router-dom";

export type SortOrder = "asc" | "desc";

function UsersContainer() {
  const [users, setUsers] = useState<User[]>([]);
  const [search] = useSearchParams();
  
  useEffect(() => {
    const order = search.get("order") as SortOrder;

    fetchUsers(order).then((users) => {
      setUsers(users);
    });
  }, [search])
  return <Users users={users} />;
}

export default UsersContainer;

