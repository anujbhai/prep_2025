// APPROACH 3. using specific type
interface IDataObj {
  first: number;
  second: number;
  third: number;
}

function MappedData() {
  const data_arr: string[] = [
    "First",
    "Second",
    "Third"
  ];

  // APPROACH 3. using specific type
  const data_obj: IDataObj = {
    first: 1,
    second: 2,
    third: 3
  };
  // APPROACH 1 and 2. using 'Object.keys' and 'Object.entries'
  // const data_obj: {[key: string]: number} = {
  //   first: 1,
  //   second: 2,
  //   third: 3
  // };

  return (
    <>
      <section>
        <h1>Mapped data - array</h1>

        <ul>
          {data_arr.map((item, index) => {
            return (
              <li key={index}>{item}</li>
            );
          })}
        </ul>

        <h1>Mapped data - object</h1>

        <ul>
          {/* // APPROACH 1. using 'Object.keys' */}
          {/*
          {Object.keys(data_obj).map((item: string) => (
            <li key={item}>
              <strong>{item}: </strong>
              {data_obj[item]}
            </li>
          ))}
          */}

          {/* // APPROACH 2. using 'Object.entries' */}
          {/*
          {Object.entries(data_obj).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
          */}

          {/* // APPROACH 3. using specific types */}
          {Object.keys(data_obj).map((item: string) => (
            <li key={item}>
              <strong>{item}: </strong>
              {data_obj[item as keyof IDataObj]}
            </li>
          ))}
        </ul>
        
      </section> 
    </>
  );
}

export default MappedData;

