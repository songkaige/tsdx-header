import AppConsts from '../lib/appconst';
import { removeCookie } from './cookie';

export function logout(loginUrl: string) {
    removeCookie(AppConsts.accessToken);
    removeCookie(AppConsts.refreshToken);
    window.location.href = loginUrl;
}