import styles from "../styles/components/Widget.module.scss";
import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import WidgetForm from "./Widgetform";

function Widget() {
  return (
    <Popover className={styles.container}>
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button className={styles.button}>
        <ChatTeardropDots width="2rem" height="2rem" />

        <div className={styles.feed}>
          <span className={styles.info}>Feedback</span>
        </div>
      </Popover.Button>
    </Popover>
  );
}

export default Widget;
