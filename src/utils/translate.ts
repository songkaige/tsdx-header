import AppConsts from '../lib/appconst';
import { getCookie } from './cookie';

export function getTranslate(fiele: string) {
    const language = getCookie(AppConsts.appLanguage) || 'zh-CN';
    const translateData = {
        'zh-CN': {
            'enterHost': '进入繁易控制台',
            'profile':'个人中心',
            'logout':'退出登录',
            'message':'站内信消息',
            'messageManagementCenter':'消息管理中心',
            'messageTips':'您已查看所有站内信消息'
        },
        'en-US': {
            'enterHost': 'Enter Flexem Console',
            'profile':'Profile',
            'logout':'Logout',
            'message':'Message',
            'messageManagementCenter':'Message management center',
            'messageTips':'You have viewed all inbound messages'
        }
    };

    return translateData[language][fiele];
}