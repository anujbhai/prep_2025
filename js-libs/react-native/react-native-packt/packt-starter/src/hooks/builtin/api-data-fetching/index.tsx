import { useCallback, useEffect, useState } from "react";

interface IDataObj {
  id: number;
  name: string;
}

function ApiDataFetching() {
  const [id, setId] = useState<number | string>("loading...");
  const [name, setName] = useState<string>("loading...");

  const fetchUser = useCallback((): Promise<IDataObj> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({id: 1, name: "mike"});
      }, 1000)
    })
  }, []);

  useEffect(() => {
    fetchUser().then((user: IDataObj) => {
      setId(user.id);
      setName(user.name);
    })
  });

  return (
    <>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
    </>
  );
}

export default ApiDataFetching;

