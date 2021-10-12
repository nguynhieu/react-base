/**
 *
 * Sidebar
 *
 */
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Calendar,
  Heatmap,
  Shop,
  Product,
  IngredientIcon,
  SplashIcon,
} from 'app/assets/images';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';
import queryString from 'query-string';
import { PAGINATION_DEFAULT } from 'app/constants';

interface Props {}

export const Sidebar = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <div className="sidebar">
      <div className="sidebar__list">
        <div className="sidebar__item">
          <NavLink
            to={`/shop?${queryString.stringify(PAGINATION_DEFAULT)}`}
            activeClassName="navlink--active"
          >
            <div className="sidebar__item--icon">
              <Shop />
            </div>
            <div className="sidebar__item--title">Shop</div>
          </NavLink>
        </div>
        <div className="sidebar__item">
          <NavLink to="/product" activeClassName="navlink--active">
            <div className="sidebar__item--icon">
              <Product />
            </div>
            <div className="sidebar__item--title">Product</div>
          </NavLink>
        </div>
        <div className="sidebar__item">
          <NavLink to="/heatmap" activeClassName="navlink--active">
            <div className="sidebar__item--icon">
              <Heatmap />
            </div>
            <div className="sidebar__item--title">Heatmap</div>
          </NavLink>
        </div>
        <div className="sidebar__item">
          <NavLink to="/transaction" activeClassName="navlink--active">
            <div className="sidebar__item--icon">
              <Calendar />
            </div>
            <div className="sidebar__item--title">Transaction</div>
          </NavLink>
        </div>
        <div className="sidebar__item">
          <NavLink to="/ingredient" activeClassName="navlink--active">
            <div className="sidebar__item--icon">
              <IngredientIcon />
            </div>
            <div className="sidebar__item--title">Ingredient</div>
          </NavLink>
        </div>
        <div className="sidebar__item">
          <NavLink to="/splash" activeClassName="navlink--active">
            <div className="sidebar__item--icon">
              <SplashIcon />
            </div>
            <div className="sidebar__item--title">Splash</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
});
