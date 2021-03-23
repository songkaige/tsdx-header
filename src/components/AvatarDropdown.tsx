import React, { useCallback } from 'react';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu } from 'antd';
// import { outCorpLogin } from '@/services/login';
import { logout } from '../utils/utils';
import HeaderDropdown from './HeaderDropdown';
import styles from '../index.less';
import AppConsts from '../lib/appconst';
import { getCookie } from '../utils/cookie';
import { HeaderArgs } from '../services/API';

export interface GlobalHeaderRightProps {
  headerArgs: HeaderArgs;
}

/**
 * 退出登录
 */
const loginOut = async (corporationUserId: string | undefined, accessToken: string, loginUrl: string) => {
  console.log(accessToken);
  if (corporationUserId) {
    //  await outCorpLogin(accessToken)
  }
  logout(loginUrl);
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
        loginOut(headerArgs.corporationUserId, getCookie(AppConsts.accessToken), headerArgs.loginUrl);
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
        个人中心
      </Menu.Item>
      <Menu.Item key="logout">
        <LogoutOutlined />
        退出登录
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
