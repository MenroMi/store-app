import { IUser } from '@/types/userTypes';

export const getProfileName = (user: IUser | null): string => {
  if (user) {
    return user.firstName && user.lastName
      ? `${user.firstName} ${user.lastName}`
      : user.firstName
      ? user.firstName
      : user.username;
  } else {
    return 'Guest';
  }
};
