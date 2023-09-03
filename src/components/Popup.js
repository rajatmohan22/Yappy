import { useState } from 'react';
import styles from './Popup.module.css';

const Popup = (props) => {

  
  const [closeButton,setCloseButton] = useState(false);
  props.isCloseClicked(closeButton);
  const ClickHandler = ()=>{
    setCloseButton(true);
  }
  return (
      <div id="popup-box" className={`${styles.popup}`}>
        <h2>Hey!</h2>
        <p>{props.Message}</p>
        <button onClick={ClickHandler} className={styles['close-button']}>Close</button>
      </div>
  );
};

export default Popup;
