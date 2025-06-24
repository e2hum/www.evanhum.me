import monitorImg from '../assets/pixelart/monitor.png';
import '../styles/Item.css';

type MonitorProps = {
  onClick: () => void;
};

export default function Monitor({ onClick }: MonitorProps) {
  return (
    <img
      src={monitorImg}
      alt="Computer"
      className="scene-item monitor"
      onClick={onClick}
    />
  );
}
