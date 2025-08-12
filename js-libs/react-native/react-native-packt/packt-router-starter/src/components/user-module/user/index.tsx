import type { User } from "../../../api";

type UserDataProps = {
  user: User;
};

function UserData(props: UserDataProps) {
  const {user} = props;

  return (
    <section>
      <p>{user.first}</p>
      <p>{user.last}</p>
      <p>{user.age}</p>
    </section>
  );
}

export default UserData;

