import "./App.css";
import { Card } from "./components/Card";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const games = [
  {
    name: "Codename",
    link: "https://codenames.game",
    youtubeId: "8-CDhyK-x9w",
    pic: "https://i.imgur.com/EcnJqiV.png",
    explain:
      "Play in English or German or other languages. Create your own room and paste in the chat.",
  },
  {
    name: "Pictionary",
    link: "https://skribbl.io",
    youtubeId: "enSezDurWFc",
    pic: "https://i.imgur.com/4kXsMME.png",
    explain:
      "Choose your language. Create private room. Copy the link and paste it in the chat.",
  },
  {
    name: "Set",
    link: "https://setwithfriends.com",
    youtubeId: "Kc4WrL7cxeg",
    pic: "https://i.imgur.com/YMSIWV2.png",
    explain:
      "If you want to play together click \"new private room\" and paste the link in the chat.",
  },
  {
    name: "Doppelkopf",
    link: "https://www.doko-lounge.de",
    youtubeId: "S-lUPbYl4hU",
    pic: "https://i.imgur.com/vTyv8WE.png",
    explain:
      "Please register. Just pick a name and a password. You don't have to use an email.",
  },
  {
    name: "Boardgamearena",
    link: "https://en.boardgamearena.com",
    youtubeId: "L24JI9rbSLA",
    pic: "https://i.imgur.com/mxcg5BY.png",
    explain: "To play you have to register with an email.",
  },
  {
    name: "Stadt Land Fluß",
    link: "https://stadtlandflussonline.net",
    youtubeId: "8xa530VyIQw",
    pic: "https://i.imgur.com/3IcjvI4.png",
    explain:
      "Choose your Language, choose cathegories and hit play. Limit the game to invited friends and post the URL to the game in the 2D World Chat.",
  },
];

const App = () => {
  return (
    <>
      <div className="container">
        <Switch>
          <Route path="/:name" render={() => <Card games={games} />} />
        </Switch>
        <ul>
          {games.map((game) => (
            <Navbar game={game} key={game.youtubeId} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
