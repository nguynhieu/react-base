import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Bar, DefaultAvatar, Logo } from 'app/assets/images';
import { NotificationIcon } from 'app/components/Layouts/NotificationIcon';
import { modalActions } from 'app/containers/Modal/slice';
import { HeaderActions } from '../HeaderActions/Loadable';

import './Header.scss';

interface Props {}

export function Header(props: Props) {
  const dispatch = useDispatch();
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);

  const handleShowNotification = useCallback(
    e => {
      e.stopPropagation();
      setIsOpenDropdown(!isOpenDropdown);
    },
    [isOpenDropdown],
  );

  const handleLogout = useCallback(() => {
    dispatch(
      modalActions.showConfirmModal({
        title: 'CONFIRM LOGOUT',
        description: 'Are you sure you want to logout?',
        onYesText: 'YES',
        onYes: () => {
          localStorage.removeItem('accessToken');
          window.location.reload();
          dispatch(modalActions.showConfirmModal(false));
        },
        onNoText: 'NO',
        onNo: () => {
          dispatch(modalActions.showConfirmModal(false));
        },
      }),
    );
  }, [dispatch]);

  return (
    <header className="header">
      <div className="header__branch">
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__title">FOODEASE</div>
      </div>
      <div className="header__user">
        <div className="header__notification" onClick={handleShowNotification}>
          <NotificationIcon unread={1} size="100%" />
          <div className="notification__dropdown">
            <div className="dropdown__header d-flex">
              <NotificationIcon
                unread={1}
                color="#000"
                size="1.15rem"
                sizeBadge=".55rem"
              />
              <div className="dropdown__header--title">Notification</div>
              <div className="dropdown__header--action">
                <Bar />
              </div>
            </div>
            <div className="dropdown__body">
              <div className="dropdown__item notification--new">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                etiam vehicula arcu senectus nunc in tincidunt elit.
                <span>New</span>
              </div>
              <div className="dropdown__item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                etiam vehicula arcu senectus nunc in tincidunt elit.
              </div>
              <div className="dropdown__item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                etiam vehicula arcu senectus nunc in tincidunt elit.
              </div>
            </div>
          </div>
        </div>

        <HeaderActions onLogout={handleLogout} />
      </div>
    </header>
  );
}
