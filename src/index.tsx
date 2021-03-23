import * as React from 'react';
import styles from './index.less';
// import { setLocale, SelectLang } from 'umi';
// import AppConsts from './lib/appconst';
// import { setCookie } from './utils/cookie';
import { Button, Space } from 'antd';
// import Avatar from './components/AvatarDropdown';

interface Props {
  isHostUser?: boolean;
}

export const HeaderRight = ({ isHostUser }: Props) => {

  // const changeLang = ({ key }: any) => {
  //   // setLocale(key);
  //   setTimeout(() => {
  //     setCookie(AppConsts.appLanguage, key);
  //   });
  // };

  const handleEnterHost = () => {

  }

  return (
    <Space className={styles.right}>
      {isHostUser && (
        <Button type="link" onClick={handleEnterHost}>
          进入繁易控制台
        </Button>
      )}
      {/* <Avatar /> */}
      {/* <SelectLang className={styles.action} onItemClick={changeLang} /> */}
    </Space>
  );
}
