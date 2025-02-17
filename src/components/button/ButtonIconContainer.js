import React from "react";
import ButtonIcon from "./ButtonIcon";
import { actionIcons } from "../../data/data";
import styles from "./ButtonIconContainer.module.css";

const ButtonIconContainer = () => {
  return (
    <ul className={styles.actionContainer}>
      {actionIcons.map((action) => {
        return <ButtonIcon key={action.id} {...action} />;
      })}
    </ul>
  );
};

export default ButtonIconContainer;
