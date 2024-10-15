import Button from "./UI/Button";
import Checkbox from "./UI/Checkbox";

import { CheckboxDataType } from "./types/buttonTypes";

const ButtonComponent = ({
  checkboxData,
  onCheckboxChange,
}: {
  checkboxData: CheckboxDataType[];
  onCheckboxChange: (updatedCheckers: CheckboxDataType[]) => void;
}) => {
  if (checkboxData.length === 0) {
    return <></>;
  }

  const handleSelectAllButton = () => {
    const nextBooleanValue = !checkboxData.every((elm) => elm.checked);

    const updatedCheckers = checkboxData.map((elm) => ({
      ...elm,
      checked: nextBooleanValue,
    }));
    onCheckboxChange(updatedCheckers);
  };

  const handleCheckboxChange = (value: string) => {
    const updatedCheckers = checkboxData.map((checker) =>
      checker.value === value ? { ...checker, checked: !checker.checked } : checker
    );
    onCheckboxChange(updatedCheckers);
  };

  return (
    <>
      <Button onClick={handleSelectAllButton}>Togle Select-All</Button>
      <div className="checker-container">
        {checkboxData.map((data) => (
          <Checkbox
            key={data.value}
            checked={data.checked}
            onChange={() => handleCheckboxChange(data.value)}
          >
            {data.value}
          </Checkbox>
        ))}
      </div>
    </>
  );
};

export default ButtonComponent;
