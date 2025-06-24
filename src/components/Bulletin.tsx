import bulletinImg from '../assets/pixelart/bulletin.png';
import '../styles/Item.css';

type BulletinProps = {
  onClick: () => void;
};

export default function Bulletin({ onClick }: BulletinProps) {
  return (
    <img
      src={bulletinImg}
      alt="Bulletin"
      className="scene-item bulletin"
      onClick={onClick}
    />
  );
}
