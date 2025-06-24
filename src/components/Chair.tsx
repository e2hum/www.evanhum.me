import chairImg from '../assets/pixelart/chair.png';
import '../styles/Item.css';

type ChairProps = {
  onClick: () => void;
};

export default function Chair({ onClick }: ChairProps) {
  return (
    <img
      src={chairImg}
      alt="Bulletin"
      className="scene-item chair"
      onClick={onClick}
    />
  );
}
