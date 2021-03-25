import { BellOutlined } from '@ant-design/icons';
import { Badge, Spin, Tabs } from 'antd';
import useMergeValue from 'use-merge-value';
import React from 'react';
import NoticeList, { NoticeIconTabProps } from './NoticeList';

import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';
import { getTranslate } from '../../utils/translate';

const { TabPane } = Tabs;

export interface NoticeIconData {
  avatar?: string | React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  datetime?: React.ReactNode;
  style?: React.CSSProperties;
  key?: string | number;
  read?: boolean;
}

export interface NoticeIconProps {
  count?: number;
  className?: string;
  loading?: boolean;
  onClear?: (tabName: string, tabKey: string) => void;
  onItemClick?: (item: NoticeIconData, tabProps: NoticeIconTabProps) => void;
  onViewMore?: (tabProps: NoticeIconTabProps, e: MouseEvent) => void;
  onTabChange?: (tabTile: string) => void;
  style?: React.CSSProperties;
  onPopupVisibleChange?: (visible: boolean) => void;
  popupVisible?: boolean;
  clearClose?: boolean;
  emptyImage?: string;
  children: React.ReactElement<NoticeIconTabProps>[];
}

const NoticeIcon: React.FC<NoticeIconProps> & {
  Tab: typeof NoticeList;
} = (props) => {
  const getNotificationBox = (): React.ReactNode => {
    const {
      children,
      loading,
      onTabChange,
    } = props;
    if (!children) {
      return null;
    }
    const panes: React.ReactNode[] = [];
    React.Children.forEach(children, (child: React.ReactElement<NoticeIconTabProps>, index: number): void => {
      if (!child || index === 1) {
        return;
      }
      const { list, title, count, tabKey, emptyText } = child.props;
      const len = list ? list.length : 0;
      const msgCount = count || count === 0 ? count : len;
      const tabTitle = msgCount > 0 ? (<>{title} <span style={{ color: "#ea6c75" }}>({msgCount})</span></>) : (<>{title}</>);
      panes.push(
        <TabPane tab={tabTitle} key={tabKey}>
          <NoticeList
            emptyText={emptyText}
            data={list}
            title={title}
            tabKey={tabKey}
            list={list}
          />
        </TabPane>,
      );
    });

    const OperationsSlot = {
      right: <span style={{ color: "#5894c6", marginRight: "20px", cursor: "pointer" }}>{getTranslate('messageManagementCenter')}</span>,
    };

    const slot = React.useMemo(() => {

      return ['right'].reduce(
        (acc, direction) => ({ ...acc, [direction]: OperationsSlot[direction] }),
        {},
      );
    }, [['right']]);
    return (
      <Spin spinning={loading} delay={300} className={styles.spin}>
        <Tabs className={styles.tabs} onChange={onTabChange} tabBarExtraContent={slot}>
          {panes}
        </Tabs>
      </Spin>
    );
  };

  const { count } = props;

  const [visible, setVisible] = useMergeValue<boolean>(false, {
    value: props.popupVisible,
    onChange: props.onPopupVisibleChange,
  });
  const notificationBox = getNotificationBox();
  const trigger = (
    <span className={styles.noticeButton}>
      <Badge count={count} style={{ boxShadow: 'none' }} className={styles.badge}>
        <BellOutlined className={styles.icon} />
      </Badge>
    </span>
  );
  if (!notificationBox) {
    return trigger;
  }

  return (
    <HeaderDropdown
      placement="bottomLeft"
      overlay={notificationBox}
      overlayClassName={styles.popover}
      trigger={['hover']}
      visible={visible}
      onVisibleChange={setVisible}
    >
      {trigger}
    </HeaderDropdown>
  );
};

NoticeIcon.Tab = NoticeList;

export default NoticeIcon;
