import React from "react";

import styles from "../UI/DashBoard.module.css";

// TODO This is just the skeleton for what I need to put in. I still need MUI to actually create the dashboard page.

const DashBoard = () => {
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <h2>About</h2>
          <h2>Help</h2>
          <h2>Contact Us</h2>
        </nav>
      </header>
      <main className={styles.snapshot_container}>
        <div className={styles.snapshot_left}>
          <div className={styles.snapshot_box_left}>
            <h3 className={styles.snap_headers}>Trends</h3>
          </div>
          <div className={styles.snapshot_box_left}>
            <h3 className={styles.snap_headers}>Goals</h3>
          </div>
        </div>
        <div className={styles.snapshot_right}>
          <div className={styles.snapshot_box}>
            <h3 className={styles.snap_headers_right}>Budget</h3>
          </div>
          <div className={styles.snapshot_box}>
            <h3 className={styles.snap_headers_right}>Transactions</h3>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashBoard;
