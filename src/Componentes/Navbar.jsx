const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.brand}>Ruana</div>
      <div style={styles.centerContainer}>
        <ul style={styles.navLinks}>
          <li style={styles.link}>Camisetas</li>
          <li style={styles.link}>Polerones</li>
          <li style={styles.link}>Gorras</li>
        </ul>
        <div style={styles.cart}>🛒 0</div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#333",
    color: "white",
    zIndex: 1000,
  },
  brand: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    flex: "1",
    textAlign: "left",
  },
  centerContainer: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    flex: "2",
    justifyContent: "center",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "1.5rem",
    margin: 0,
    padding: 0,
  },
  link: {
    cursor: "pointer",
  },
  cart: {
    fontSize: "1.2rem",
  },
};

export default Navbar;
