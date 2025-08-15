import { lazy } from "react";

const MyFeature = lazy(() => import("../../components/feature-component"));

function FeaturePage() {
  return (
    <>
      <h1>My Feature Page</h1>

      <MyFeature />
    </>
  );
}

export default FeaturePage;

