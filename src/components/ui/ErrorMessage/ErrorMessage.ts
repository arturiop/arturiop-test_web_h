import { notification } from 'antd';

export const errorPopups = (message: string): void => notification.error({ message: { message } });
