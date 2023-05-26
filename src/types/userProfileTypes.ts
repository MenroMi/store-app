import { StaticImageData } from 'next/image';

export interface IUserProfileProps {
  username: string;
  profileTopBgSrc: string | StaticImageData;
  avatarSrc: string | StaticImageData;
  userBonusPoints: string;
}
