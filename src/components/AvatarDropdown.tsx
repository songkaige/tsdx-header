import React, { useCallback } from 'react';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu } from 'antd';
import { logout } from '../utils/utils';
import HeaderDropdown from './HeaderDropdown';
import styles from '../index.less';
import AppConsts from '../lib/appconst';
import { getCookie } from '../utils/cookie';
import { HeaderArgs } from '../services/API';
import { outCorpLogin } from '../services/service';
import { getTranslate } from '../utils/translate';

export interface GlobalHeaderRightProps {
  headerArgs: HeaderArgs;
}

/**
 * 退出登录
 */
const loginOut = async (headerArgs: HeaderArgs, accessToken: string) => {
  console.log(accessToken);
  if (headerArgs.corporationUserId) {
    await outCorpLogin(headerArgs.idsServiceUrl, accessToken);
  }
  logout(headerArgs.loginUrl);
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ headerArgs }) => {

  const onMenuClick = useCallback(
    (event: {
      key: React.Key;
      keyPath: React.Key[];
      item: React.ReactInstance;
      domEvent: React.MouseEvent<HTMLElement>;
    }) => {
      const { key } = event;
      if (key === 'logout') {
        loginOut(headerArgs, getCookie(AppConsts.accessToken));
        return;
      }
      if (key === 'center') {
        window.open(`${headerArgs.corpAppBaseUrl}/account/profile`);
      }
    },
    [],
  );

  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
      <Menu.Item key="center" disabled={headerArgs.disableProfile}>
        <UserOutlined />
        {getTranslate('profile')}
      </Menu.Item>
      <Menu.Item key="logout">
        <LogoutOutlined />
        {getTranslate('logout')}
      </Menu.Item>
    </Menu>
  );
  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar size="small" className={styles.avatar} src={headerArgs.avatar} alt="avatar" />
        <span className={`${styles.name} anticon`}>{headerArgs.fullName}</span>
      </span>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;
