import axios from "axios";

export async function hostLogin(idsServiceUrl: string, accessToken: string) {
    return axios(`${idsServiceUrl}/api/hostUsers/login`, {
        method: 'post',
        data: {
            accessToken,
        },
    });
}

export async function outCorpLogin(idsServiceUrl: string, accessToken: string) {
    return axios(`${idsServiceUrl}/api/CorpUsers/logout`, {
        method: 'POST',
        data: {
            accessToken
        }
    });
}
