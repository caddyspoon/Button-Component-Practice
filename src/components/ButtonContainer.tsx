import { useEffect, useState } from "react";

import Card from "./UI/Card";
import Button from "./UI/Button";
import ButtonComponent from "./ButtonComponent";

import { CheckboxDataType } from "./types/buttonTypes";

const dummyFetchData = [
  { lable: "Type One", value: "type-1", checked: false },
  { lable: "Type Two", value: "type-2", checked: false },
  { lable: "Type Three", value: "type-3", checked: false },
  { lable: "Type Four", value: "type-4", checked: false },
  { lable: "Type Five", value: "type-5", checked: false },
];

const initFormState = {
  checkedValue: [] as string[],
};

const ButtonContainer = () => {
  const [formState, setFormState] = useState(initFormState);
  const [checkboxState, setCheckboxState] = useState<CheckboxDataType[]>([]);

  useEffect(() => {
    setCheckboxState(dummyFetchData);
  }, []);

  const handleResetButton = () => {
    setFormState({ checkedValue: [] });
    setCheckboxState((prevState) =>
      prevState.map((state) => ({
        ...state,
        checked: false,
      }))
    );
  };

  const handleCheckboxChange = (updatedCheckers: CheckboxDataType[]) => {
    const checkedValues = updatedCheckers
      .filter((checker) => checker.checked)
      .map((checker) => checker.value);

    setFormState({ checkedValue: checkedValues });
    setCheckboxState(updatedCheckers);
  };

  return (
    <>
      <h1 className="text-center">Button Component</h1>
      <div className="container">
        <Card>
          <div className="inner-box">
            <h3>Buttons in the form</h3>
            <ButtonComponent checkboxData={checkboxState} onCheckboxChange={handleCheckboxChange} />
          </div>
          <Button onClick={handleResetButton} reset={true}>
            Form Reset
          </Button>
          <div className="inner-box">
            <h3>Selected Value</h3>
            <div className="d-flex">
              {formState.checkedValue.length === 0 ? (
                <p>Nothing selected.</p>
              ) : (
                formState.checkedValue.map((value) => <p className="mr-10">{value}</p>)
              )}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ButtonContainer;
