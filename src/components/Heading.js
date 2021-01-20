import React from "react";
import styles from "../css/heading.module.css";

export default function Heading(props) {
  return (
    <>
      <h1 className={styles.appTitle}>{props.text}</h1>
    </>
  );
}
