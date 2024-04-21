import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "../css/Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} <a href="https://www.jgorostegui.software/en"
                >Jon Gorostegui </a> All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
