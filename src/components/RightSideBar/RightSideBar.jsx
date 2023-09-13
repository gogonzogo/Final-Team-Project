import s from './rightSideBar.module.css';

const RightSideBar = () => {
  return (
    <div className={s.sideBarContainer}>
      <div className={s.sideBarContent}>
        <p className={s.sideBarTitle}>Your stats:</p>
        <ul className={s.statsBox}>
          <li className={s.statsBoxItem}>
            <p>Height, cm</p>
            <p>12</p>
          </li>
          <li className={s.statsBoxItem}>
            <p>Age</p>
            <p>12</p>
          </li>
          <li className={s.statsBoxItem}>
            <p>Current weight, kg</p>
            <p>12</p>
          </li>
          <li className={s.statsBoxItem}>
            <p>Desired weight, kg</p>
            <p>12</p>
          </li>
          <li className={s.statsBoxItem}>
            <p>Blood type</p>
            <p>A</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default RightSideBar;
