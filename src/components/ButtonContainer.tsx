import { useEffect, useState, useCallback } from "react";

import Card from "./UI/Card";
import Button from "./UI/Button";
import ButtonComponent from "./ButtonComponent";

import { CheckboxDataType } from "./types/buttonTypes";

const fetchedData = [
  { label: "One", value: "type-1", checked: false },
  { label: "Two", value: "type-2", checked: false },
  { label: "Three", value: "type-3", checked: false },
  { label: "Four", value: "type-4", checked: false },
  { label: "Five", value: "type-5", checked: false },
];

const initFormState = {
  checkedValue: [] as string[],
};

const ButtonContainer = () => {
  const [formState, setFormState] = useState(initFormState);
  const [checkboxState, setCheckboxState] = useState<CheckboxDataType[]>([]);

  useEffect(() => {
    setCheckboxState(fetchedData);
  }, []);

  const handleResetButton = useCallback(() => {
    setFormState(initFormState);
    setCheckboxState((prevState) =>
      prevState.map((state) => ({
        ...state,
        checked: false,
      }))
    );
  }, []);

  const handleCheckboxChange = useCallback((updatedCheckboxData: CheckboxDataType[]) => {
    const nextCheckedValues = updatedCheckboxData
      .filter((checkboxValue) => checkboxValue.checked)
      .map((checkboxValue) => checkboxValue.value);

    setFormState((prevState) => ({ ...prevState, checkedValue: nextCheckedValues }));
    setCheckboxState(updatedCheckboxData);
  }, []);

  return (
    <>
      <h1 className="text-center">Button Component</h1>
      <div className="container">
        <Card>
          <div className="inner-box">
            <h3>Button Component inside the form</h3>
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
                formState.checkedValue.map((value) => (
                  <p key={value} className="mr-10">
                    {value}
                  </p>
                ))
              )}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ButtonContainer;
