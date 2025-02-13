import Button from "../button";
import headerStyles from "./styles.module.css";

const menuList = ["Events", "My Tickets", "About Project"];
const Header = () => {
  return (
    <header className={headerStyles.header}>
      <section className={headerStyles.header__logo}>
        <img src="/assets/images/logo.png" alt="app logo" />
        <img src="/assets/images/logoname.png" alt="app logo" />
      </section>
      <section className={headerStyles.header__menuContainer}>
        {menuList.map((menu_) => {
          return (
            <ul
              className={headerStyles.header__menuContainer__menu}
              key={menu_}
            >
              <li>{menu_}</li>
            </ul>
          );
        })}
      </section>
      <section className={headerStyles.header__myTickets}>
        <Button title="My Tickets" width="169px" height="40px"  />
      </section>
    </header>
  );
};

export default Header;
