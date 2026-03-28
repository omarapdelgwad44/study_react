import { ClipLoader } from "react-spinners";

const defaultOverride = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading, override = defaultOverride }) => {
  return (
    <ClipLoader
      loading={loading}
      color="#4338ca"
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;