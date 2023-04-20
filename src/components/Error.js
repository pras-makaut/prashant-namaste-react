import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>OOps!!</h1>
      <h2>Something Went Worng.</h2>
      <h2>{error.status + " : " + error.text} </h2>
    </div>
  );
};

export default Error;
