import classNames from 'classnames';
import { Noti, Noti1 } from 'app/assets/images';
import * as React from 'react';
import './NotificationIcon.scss';

interface Props {
  unread: number;
  color?: string;
  size: string;
  sizeBadge?: string;
}

export function NotificationIcon(props: Props) {
  const { unread, color, size, sizeBadge } = props;

  return (
    <>
      <div
        style={{ width: size, height: size }}
        className="header__notification--icon"
      >
        <Noti
          style={{ fill: color ? color : '#fff' }}
          className="header--noti"
        />
        <Noti1 style={{ fill: color ? color : '#fff' }} />
        <div
          style={{ width: sizeBadge, height: sizeBadge }}
          className={classNames({
            'header__notification--badge': true,
            'notification--unread': unread > 0,
          })}
        >
          {unread}
        </div>
      </div>
    </>
  );
}
