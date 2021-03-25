export interface HeaderArgs {
    showHost: boolean;
    disableProfile: boolean;
    avatar: string;
    corpAppBaseUrl: string;
    corporationUserId: string;
    loginUrl: string;
    idsServiceUrl: string;
    fullName: string;
}

export interface NoticeIconData{
    avatar?: string | React.ReactNode;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    datetime?: string | React.ReactNode;
}