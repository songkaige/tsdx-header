import * as React from 'react';
import styles from './index.less';
import { Button, Space } from 'antd';
import { HeaderArgs } from './services/API';
import Avatar from './components/AvatarDropdown';
import { hostLogin } from './services/service';
import { getCookie } from './utils/cookie';
import AppConsts from './lib/appconst';
import { getTranslate } from './utils/translate';
import axios from 'axios';
import NoticeIconView from './components/NoticeIconView';

interface IHeaderProps {
  headerArgs: HeaderArgs;
}

export const HeaderRight: React.FunctionComponent<IHeaderProps> = ({ headerArgs }) => {

  axios.defaults.headers.common['Authorization'] = `Bearer ${getCookie(AppConsts.accessToken)}`;

  const handleEnterHost = () => {
    hostLogin(headerArgs.idsServiceUrl, getCookie(AppConsts.accessToken) as string).then(() => {
      window.open(`${headerArgs.corpAppBaseUrl}/host/corporation-audit`, '_self');
    });
  };
  return (
    <Space className={styles.right}>
      {headerArgs.showHost && (
        <Button type="link" onClick={handleEnterHost}>
          { getTranslate('enterHost')}
        </Button>
      )}
      <NoticeIconView headerArgs={headerArgs} />
      <Avatar headerArgs={headerArgs} />
    </Space>
  );
}
