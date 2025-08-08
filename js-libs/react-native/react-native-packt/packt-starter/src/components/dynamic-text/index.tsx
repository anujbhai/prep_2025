const enabled = false;
const text = "A button";
const placeholder = "input value";
const size = 50;

function DynamicText() {
  return (
    <section>
      <button disabled={!enabled}>{text}</button>
      <input
        placeholder={placeholder}
        size={size}
        id="somevalue"
        name="somevalue"
      />
    </section>
  );

}

export default DynamicText;

