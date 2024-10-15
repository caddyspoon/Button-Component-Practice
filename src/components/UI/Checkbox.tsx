import classes from "./Checkbox.module.css";

const Checkbox = ({
  children,
  checked,
  onChange,
}: {
  children: React.ReactNode;
  checked: boolean;
  onChange: () => void;
}) => {
  return (
    <label className={classes.container}>
      {children}
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={classes.checkmark}></span>
    </label>
  );
};

export default Checkbox;
