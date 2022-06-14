
import hand from '../../assets/img/home-hand.png';
import handDark from '../../assets/img/home-hand-dark.png';
import ThemeContext, { DARK_THEME } from '../../context';
import { memo } from 'react';
import HomeLeftColumn from './HomeLeftColumn';

const HomeHeader = memo(() => {
  return (<ThemeContext.Consumer>
    {({ theme }) => (
      <section className="hero mt-header">
        <div className="container">
          <div className="row">
            <div className="col left-column">
              <HomeLeftColumn />
            </div>
            <div className="col helping-hand d-none d-lg-block">
              <img
                src={theme === DARK_THEME ? handDark : hand}
                className="helping-hand-img"
                alt="helping hand"
              />
            </div>
          </div>
        </div>
      </section>)}</ThemeContext.Consumer>);
});

export default HomeHeader;