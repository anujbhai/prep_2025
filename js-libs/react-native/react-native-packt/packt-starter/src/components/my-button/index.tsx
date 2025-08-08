interface LayoutProps {
  children: React.ReactNode;
};

function MyButton(props: LayoutProps) {
  const {children} = props;
  
  const handleOnClick = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      <button onClick={handleOnClick}>{children}</button>
    </>
  );
}

export default MyButton;

