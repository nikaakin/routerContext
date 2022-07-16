import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={600}
    viewBox="0 0 400 600"
    backgroundColor="#022a55"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="135" y="75" rx="10" ry="10" width="200" height="357" />
    <rect x="134" y="484" rx="10" ry="10" width="203" height="114" />
    <rect x="135" y="446" rx="8" ry="8" width="199" height="26" />
  </ContentLoader>
);

export default MyLoader;
