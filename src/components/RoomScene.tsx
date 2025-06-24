import room from "../assets/pixelart/room.png";
import desk from "../assets/pixelart/desk.png";
import computer from "../assets/pixelart/computer.png";
import deskmat from "../assets/pixelart/deskmat.png";
import keyboard from "../assets/pixelart/keyboard.png";
import mouse from "../assets/pixelart/mouse.png";

import Monitor from "./Monitor";
import Bulletin from "./Bulletin";
import Posters from "./Posters";
import Chair from "./Chair";

type RoomSceneProps = {
  onItemClick: (label: string) => void;
};

function RoomScene({ onItemClick }: RoomSceneProps) {
  return (
      <div className="scene-wrapper">
        <img src={room} alt="Room" className="scene-room" />
        <Posters onClick={() => onItemClick('Artwork')}/>
        <img src={desk} alt="Desk" className="scene-item desk" />
        <img src={computer} alt="Computer" className="scene-item computer" />
        <img src={deskmat} alt="Deskmat" className="scene-item deskmat" />
        <img src={keyboard} alt="Keyboard" className="scene-item keyboard" />
        <img src={mouse} alt="Mouse" className="scene-item mouse" />
        <Chair onClick={() => onItemClick('About')}/>
        <Monitor onClick={() => onItemClick('Experience')} />
        <Bulletin onClick={() => onItemClick('Projects')} />
      </div>
  );
}

export default RoomScene;