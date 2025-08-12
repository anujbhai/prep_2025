import { Link } from "react-router-dom";
import type { User } from "../../../api";

type UsersProps = {
  users: User[];
};

function Users(props: UsersProps) {
  const {users} = props;

  return (
    <ul>
    {users.map((user, id) => (
      <li key={id}>
        <Link to={`/users/${id}`}>{user.first}</Link>
      </li>
    ))}
    </ul>
  );
}

export default Users;

