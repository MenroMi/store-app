import { StaticImageData } from 'next/image';

export interface IUserProfileProps {
  username: string;
  profileTopBgSrc: any;
  avatarSrc: string | StaticImageData;
  userBonusPoints: string;
}
