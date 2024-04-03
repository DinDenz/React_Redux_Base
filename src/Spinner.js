import { useSelector } from "react-redux";
import { Circles } from "react-loader-spinner";

export default function Spinner() {
  const spinner = useSelector((state) => state.spinReducer.isLoading);

  return (
    <div className="loader-styles">
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={spinner}
      />
    </div>
  );
}
