/**
 *
 * HeaderActions
 *
 */
import React, { memo, useCallback, useState } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';

import { useWindowDemensions } from 'app/hooks';
import { WindowScreenSize } from 'app/hooks/useWindowDemensions';
import { viewportScreenSize } from 'app/constants';
import { DefaultAvatar } from 'app/assets/images';

import './index.scss';

interface Props {
  onLogout?: () => void;
}

export const HeaderActions = memo(({ onLogout }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const { width, height }: WindowScreenSize = useWindowDemensions();
  const [isShowActionsDropdown, setIsShowActionsDropdown] = useState<boolean>(
    false,
  );

  const toggleShowActions = useCallback(() => {
    if (width > 768) return;

    setIsShowActionsDropdown(() => !isShowActionsDropdown);
  }, [width, isShowActionsDropdown]);

  return (
    <>
      {width > viewportScreenSize.md && (
        <div className="header__user-name">Bruno Fernandes</div>
      )}

      <div className="header__user-avatar" onClick={toggleShowActions}>
        <img src={DefaultAvatar} alt="" />
        {width <= viewportScreenSize.md && isShowActionsDropdown && (
          <div className="header__dropdown">
            <div className="header__user-name">Bruno Fernandes</div>
            <div className="header__user-logout" onClick={onLogout}>
              <span>Log out</span>
            </div>
          </div>
        )}
      </div>

      {width > viewportScreenSize.md && (
        <div className="header__user-logout" onClick={onLogout}>
          <span>Log out</span>
        </div>
      )}
    </>
  );
});
