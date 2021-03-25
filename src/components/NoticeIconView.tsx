import React from 'react';
import styles from '../index.less';
import { HeaderArgs, NoticeIconData } from '../services/API';
import { getTranslate } from '../utils/translate';
import NoticeIcon from './NoticeIcon';

interface IHeaderProps {
    headerArgs: HeaderArgs;
    onNoticeVisibleChange?: (visible: boolean) => void;
  }

const NoticeIconView: React.FC<IHeaderProps> = ({ headerArgs, onNoticeVisibleChange}) => {
    const noticeData: NoticeIconData[] = [];
    noticeData.push({
        avatar:headerArgs.avatar,
        title:'促销活动消息标题',
        datetime:'2021-03-18 09:07:54'
    },{
        avatar:headerArgs.avatar,
        title:'告警消息消息标题',
        datetime:'2021-03-24 11:55:50'
    });
    return (
        <NoticeIcon
            className={styles.action}
            count={noticeData.length}
            onItemClick={() => {

            }}
            loading={false}
            onPopupVisibleChange={onNoticeVisibleChange}
            clearClose
        >
            <NoticeIcon.Tab
                tabKey="notification"
                count={noticeData.length}
                list={noticeData}
                title={getTranslate('message')}
                emptyText={getTranslate('messageTips')}
                showViewMore
            />
            <></>
        </NoticeIcon>
    );
};

export default NoticeIconView;
