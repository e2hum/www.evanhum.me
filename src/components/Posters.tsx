import postersImg from '../assets/pixelart/posters.png';
import '../styles/Item.css';

type PostersProps = {
  onClick: () => void;
};

export default function Posters({ onClick }: PostersProps) {
  return (
    <img
      src={postersImg}
      alt="Posters"
      className="scene-item posters"
      onClick={onClick}
    />
  );
}
