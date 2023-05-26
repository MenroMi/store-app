import { IUser } from '@/types/userTypes';
import noAvatar from '@/assets/noAvatar.png';
import profile from '@/assets/icons/profile.svg';

export const getProfilePhoto = (user: IUser | null) => {
  if (user) {
    return user.avatar ? user.avatar.formats.thumbnail.url : noAvatar;
  } else {
    return noAvatar;
  }
};
