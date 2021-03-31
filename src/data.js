import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "New Horizons",
      artist: "Nymano, Epektase",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#5D5483", "#926C90"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10141",
    },
    {
      name: "Golden",
      artist: "Aarigod",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#596F3E", "#CFEE90"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=13004",
    },
    {
      name: "Train Ride",
      artist: "Nymano, Philanthrope",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#5D5483", "#926C90"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10138",
    },
    {
      name: "Lagoons",
      artist: "Strehlow, Chris Mazuera",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#BF5049", "#FDF1DB"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8266",
    },
    {
      name: "Kinsfolk",
      artist: "Aarigod",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#596F3E", "#CFEE90"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=13011",
    },
    {
      name: "Jazz Cabbage",
      artist: "Ian Ewing, Strehlow",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#BF5049", "#FDF1DB"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9363",
    },
  ];
}

export default chillHop;
