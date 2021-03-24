import AppConsts from '../lib/appconst';
import { getCookie } from './cookie';

export function getTranslate(fiele: string) {
    const language = getCookie(AppConsts.appLanguage) || 'zh-CN';
    const translateData = {
        'zh-CN': {
            'enterHost': '进入繁易控制台',
            'profile':'个人中心',
            'logout':'退出登录'
        },
        'en-US': {
            'enterHost': 'Enter Flexem Console',
            'profile':'Profile',
            'logout':'Logout'
        }
    };

    return translateData[language][fiele];
}