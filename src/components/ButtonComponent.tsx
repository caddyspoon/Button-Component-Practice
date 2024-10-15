import { useCallback } from "react";

import Button from "./UI/Button";
import Checkbox from "./UI/Checkbox";

import { CheckboxDataType } from "./types/buttonTypes";

const ButtonComponent = ({
  checkboxData,
  onCheckboxChange,
}: {
  checkboxData: CheckboxDataType[];
  onCheckboxChange: (updatedCheckboxValues: CheckboxDataType[]) => void;
}) => {
  const handleSelectAllButton = useCallback(() => {
    const nextBooleanValue = !checkboxData.every((elm) => elm.checked);

    const updatedCheckboxValues = checkboxData.map((elm) => ({
      ...elm,
      checked: nextBooleanValue,
    }));
    onCheckboxChange(updatedCheckboxValues);
  }, [checkboxData, onCheckboxChange]);

  const handleCheckboxChange = useCallback(
    (changedValue: string) => {
      const updatedCheckboxValues = checkboxData.map((checkboxValue) =>
        checkboxValue.value === changedValue
          ? { ...checkboxValue, checked: !checkboxValue.checked }
          : checkboxValue
      );
      onCheckboxChange(updatedCheckboxValues);
    },
    [checkboxData, onCheckboxChange]
  );

  if (checkboxData.length === 0) {
    return <p>...Loading</p>;
  }

  return (
    <>
      <Button
        className={
          checkboxData.map((data) => data.checked).every((checkedValue) => checkedValue)
            ? "btn-selected"
            : ""
        }
        onClick={handleSelectAllButton}
      >
        Toggle Select-All
      </Button>
      <div className="checkbox-container">
        {checkboxData.map((data) => (
          <Checkbox
            key={data.value}
            checked={data.checked}
            onChange={() => handleCheckboxChange(data.value)}
          >
            {data.label}
          </Checkbox>
        ))}
      </div>
    </>
  );
};

export default ButtonComponent;
