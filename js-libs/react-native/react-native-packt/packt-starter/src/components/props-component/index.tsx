export interface IPropsComponentPropTypes {
  title: string;
  description: string;
  disabled?: boolean;
  btnText: string;
}

function PropsComponent(props: IPropsComponentPropTypes) {
  const {
    title,
    description,
    disabled,
    btnText,
  } = props;

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>

      <div>
        <button
          disabled={disabled}
        >
          {btnText}
        </button>
      </div>
    </>
  );
}

export default PropsComponent;

