import BackButton from "../../components/BackButton";

import { useReducer } from "react";

import { reducer, initialState } from "./store";

import SuccessModal from "../../components/SuccessModal";
import SettingsForm from "../../components/Settigns/SettingsForm";
import SettingsBox from "../../components/Settigns/SettingsBox";

const Settings = () => {
  const [store, dispatch] = useReducer(reducer, initialState);
  const { state, showStatus } = store;

  // Handler functions
  const handleGoBack = () => {
    dispatch({ type: "toggleState", payload: "settings" });
  };
  const handleChangePass = () => {
    dispatch({ type: "toggleState", payload: "changePass" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(store);
    dispatch({ type: "showStatus", payload: true });
  };
  return (
    <div>
      <header className="mb-5">
        {state === "settings" && (
          <h2 className="text-[24px] font-medium ">Settings</h2>
        )}
        {state === "changePass" && (
          <BackButton onClick={handleGoBack}>Change Pasword</BackButton>
        )}
      </header>
      <main className="max-w-[614px]">
        {state === "settings" && <SettingsBox onClick={handleChangePass} />}
        {state === "changePass" && (
          <SettingsForm
            onSubmit={handleSubmit}
            store={store}
            dispatch={dispatch}
          />
        )}
      </main>

      {showStatus && (
        <SuccessModal
          onClick={() => dispatch({ type: "showStatus", payload: false })}
          text={"Okay"}
          message={"Password Changed Successfully"}
        />
      )}
    </div>
  );
};

export default Settings;
