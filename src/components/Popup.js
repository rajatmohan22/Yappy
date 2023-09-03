import { useState } from 'react';
import styles from './Popup.module.css';

const Popup = ({Message, isCloseClicked}) => {
  const [closeButton,setCloseButton] = useState(false);
  const ClickHandler = ()=>{
    setCloseButton(true);
    isCloseClicked(true)
  }
  return (
      <div id="popup-box" className={`${styles.popup}`}>
        <h2>Hey!</h2>
        <p>{Message}</p>
        <button onClick={ClickHandler} className={styles['close-button']}>Close</button>
      </div>
  );
};

export default Popup;
