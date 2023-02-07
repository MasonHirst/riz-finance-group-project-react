import React from "react";


// TODO This is just the skeleton for what I need to put in. I still need MUI to actually create the dashboard page.

const DashBoard = () => {
  return (
    <div>
      <header>
        <nav>
          <h2>About</h2>
          <h2>Help</h2>
          <h2>Contact Us</h2>
        </nav>
      </header>
      <main>
        <div>
          <div>
            <h3>Trends</h3>
          </div>
          <div>
            <h3>Goals</h3>
          </div>
        </div>
        <div>
          <div>
            <h3>Budget</h3>
          </div>
          <div>
            <h3>Transactions</h3>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashBoard;
