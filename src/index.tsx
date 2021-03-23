import * as React from 'react';
import styles from './index.less';
// import { setLocale, SelectLang } from 'umi';
// import AppConsts from './lib/appconst';
// import { setCookie } from './utils/cookie';
import { Button, Space } from 'antd';
import { HeaderArgs } from './services/API';
import Avatar from './components/AvatarDropdown';

interface IHeaderProps {
  headerArgs: HeaderArgs;
}

export const HeaderRight: React.FunctionComponent<IHeaderProps> = ({ headerArgs }) => {

  const handleEnterHost = () => {

  }

  return (
    <Space className={styles.right}>
      {headerArgs.showHost && (
        <Button type="link" onClick={handleEnterHost}>
          进入繁易控制台
        </Button>
      )}
      <Avatar headerArgs={headerArgs} />
    </Space>
  );
}
