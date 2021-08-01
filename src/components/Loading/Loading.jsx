import "./Loading.scss";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <>
      <Spinner
        animation="grow"
        variant="warning"
        className="loading-spinner mr-3"
      />
    </>
  );
};

export default Loading;
