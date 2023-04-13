import state from "../store";
import CustomButton from "./CustomButton";
const Save = () => {
  return (
    <div
      className="filepicker-container "
      style={{ height: "80px", marginTop: "220px" }}
    >
      <CustomButton
        type="filled"
        title="Download"
        handleClick={() => {
          state.saveBtn = true;
        }}
      />
    </div>
  );
};

export default Save;
