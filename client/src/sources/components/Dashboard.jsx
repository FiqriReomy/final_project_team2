import React from "react";
import Main from "../Main";
import Sidebar from "../components/Sidebar";
const Dashboard = ({ children }) => {
  return (
    <Main>
      <section className="py-2 ">
        <div className="mx-auto px-5 max-w-screen-xl">
          <div className="flex p-2">
            <div className="leftside w-1/4 ">
              <Sidebar />
            </div>
            <React.Fragment>
              <div className="rightside w-full ">
                <section>{children}</section>
              </div>
            </React.Fragment>
          </div>
        </div>
      </section>
    </Main>
  );
};
export default Dashboard;
