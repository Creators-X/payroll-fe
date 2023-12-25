import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Button from "../Button";
const SettingsForm = ({ store, onSubmit, dispatch }) => {
  const {
    showNewPass,
    showConfirmPass,
    showOldPass,
    oldPass,
    newPass,
    confirmPass,
  } = store;
  return (
    <form className="w-[100%]" onSubmit={onSubmit}>
      <div className="relative mb-5">
        <input
          placeholder="Enter Old Password"
          type={showOldPass ? "text" : "password"}
          className="w-[100%] p-10 border border-[#9DA9C6] rounded-md outline-none max-h-[86px] placeholder:text-[#141414] placeholder:font-medium placeholder:text-5"
          onChange={(e) =>
            dispatch({ type: "oldPass", payload: e.target.value })
          }
          value={oldPass}
          required
        />
        <span
          className="absolute right-10 top-[18%] h-[30px] bottom-[50%] translate-y-[50%] cursor-pointer"
          onClick={() => dispatch({ type: "toggleOldPass" })}
        >
          {showOldPass ? (
            <IoEyeOffOutline size={30} />
          ) : (
            <IoEyeOutline size={30} />
          )}
        </span>
      </div>

      <div className="relative mb-5">
        <input
          placeholder="Enter New Password"
          type={showNewPass ? "text" : "password"}
          className="w-[100%] p-10 border border-[#9DA9C6] rounded-md outline-none max-h-[86px] placeholder:text-[#141414] placeholder:font-medium placeholder:text-5"
          onChange={(e) =>
            dispatch({ type: "newPass", payload: e.target.value })
          }
          value={newPass}
          required
        />
        <span
          className="absolute right-10 top-[18%] h-[30px] bottom-[50%] translate-y-[50%] cursor-pointer"
          onClick={() => dispatch({ type: "toggleNewPass" })}
        >
          {showNewPass ? (
            <IoEyeOffOutline size={30} />
          ) : (
            <IoEyeOutline size={30} />
          )}
        </span>
      </div>
      <div className="relative mb-5">
        <input
          placeholder="Confirm New Password"
          type={showConfirmPass ? "text" : "password"}
          className="w-[100%] p-10 border border-[#9DA9C6] rounded-md outline-none max-h-[86px] placeholder:text-[#141414] placeholder:font-medium placeholder:text-5"
          onChange={(e) =>
            dispatch({ type: "confirmPass", payload: e.target.value })
          }
          value={confirmPass}
          required
        />
        <span
          className="absolute right-10 top-[18%] h-[30px] bottom-[50%] translate-y-[50%] cursor-pointer"
          onClick={() => dispatch({ type: "toggleConfirmPass" })}
        >
          {showConfirmPass ? (
            <IoEyeOffOutline size={30} />
          ) : (
            <IoEyeOutline size={30} />
          )}
        </span>
      </div>
      <Button onClick={onSubmit}>Change Password</Button>
    </form>
  );
};

export default SettingsForm;
