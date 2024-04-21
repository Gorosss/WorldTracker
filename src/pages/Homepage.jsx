import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "../css/Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />

      <section>
        <h1>
          WorldTracker keeps track of your travels.
        </h1>
        <h2>
          A world map that records your footsteps in every city you visit. Keep track of your memorable experiences.
        </h2>
        <Link to="/login" className="cta">
          Keep tracking
        </Link>
      </section>
    </main>
  );
}
