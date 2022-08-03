export enum EButtonTypes {
    AFFIRMATIVE = 'AFFIRMATIVE',
    DESTRUCTIVE = 'DESTRUCTIVE'
}

export interface IPropsButton {
    type?: EButtonTypes;
    disabled?: boolean;
    [x: string]: any;
}

export interface IPropsLink extends IPropsButton {}

export interface IPropsIcon extends IPropsButton {
    path: string;
    size?: string;
}