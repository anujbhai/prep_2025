import PropsComponent from "../../components/props-component";
import PropsList from "../../components/props-list";

interface IContainerPropTypes {
  btnText: string,
  items: any[]
}

function ContainerPropElement(props: IContainerPropTypes) {
  const {
    btnText,
    items
  } = props;

  return (
    <section>
      <PropsComponent
        title="Title for Props Component"
        description="Lorem ispum dolor sit amet adipicing elit volputate..."
        disabled={false}
        btnText={btnText}
      />

      <PropsList items={items} />
    </section>
  )
}

export default ContainerPropElement;

