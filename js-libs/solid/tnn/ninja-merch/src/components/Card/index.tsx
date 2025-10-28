interface CardProps {
  children: any;
  rounded: boolean;
  flat: boolean;
}

const Card = (props: CardProps) => {
  return (
    <div
      class="bg-white p-4 text-center rounded-md shadow-md flex flex-col justify-between"
      classList={{ "rounded-md": props.rounded, "shadow-md": !props.flat }}
    >
      {props.children}
    </div>
  );
};

export default Card;
