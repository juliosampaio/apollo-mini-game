import React from "react";
import styles from "./style.module.css";
import Display from "../display";
import Button from "../button";
import { useEngine } from "../../hooks";
const Console = () => {
  const { power, togglePower, matrix } = useEngine();
  return (
    <div className={styles.console}>
      <audio id="audioPlayer" />
      <div className={styles.displayContainer}>
        <Display power={power} matrix={matrix} />
      </div>
      <div className={styles.division}></div>
      <div className={styles.buttonsContainer}>
        <div className={styles.row}>
          <Button size="m" labels={["left", "height"]} />
          <Button size="m" labels={["right", "speed"]} />
          <Button onClick={togglePower} size="s" labels={["on/off"]} />
          <Button size="l" labels={["rotate", "direction"]} />
        </div>
        <div className={styles.row}>
          <Button size="m" labels={["down", "mode"]} />
          <Button size="s" labels={["mute"]} />
        </div>
        <div className={styles.row}>
          <Button size="s" labels={["start/p"]} />
          <Button size="s" labels={["reset"]} />
        </div>
      </div>
    </div>
  );
};

export default Console;
