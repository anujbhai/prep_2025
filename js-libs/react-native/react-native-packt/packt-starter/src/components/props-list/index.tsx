export interface IPropsListPropTypes {
  items: any[]
}

function PropsList(props: IPropsListPropTypes) {
  const {items} = props;

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default PropsList;

