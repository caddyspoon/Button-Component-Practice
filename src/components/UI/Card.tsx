import classes from "./Card.module.css";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={classes.card}>
      <div className={classes.container}>{children}</div>
    </div>
  );
};

export default Card;
