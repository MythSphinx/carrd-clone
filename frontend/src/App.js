import "./App.css";
import {
  TwitterOutlined,
  RedditOutlined,
  InstagramOutlined,
  HomeOutlined,
  LinkOutlined,
} from "@ant-design/icons";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <h1>MYTH SPHINX'S COMMISSIONS</h1>
        <h3>Status: OPEN</h3>
      </div>
      <div id="twitter">
        <TwitterOutlined /> Twitter
      </div>
      <div id="tumblr">
        <LinkOutlined /> Tumblr
      </div>
      <div id="insta">
        <InstagramOutlined /> Instagram
      </div>
      <div className="email">
        <div>E-mail: mythsphinx28@gmail.com </div>
        <div> Discord: Myth#2749</div>
      </div>
      <div id="pixiv">
        <HomeOutlined /> Pixiv
      </div>
      <div id="reddit">
        <RedditOutlined /> Reddit
      </div>

      <div id="terms">
        <b>Terms: </b>
        <p>
          1. Payment through <b>PayPal</b>, 100% upfront.{" "}
        </p>
        <p>
          2. Commission time is around 1-2 weeks, I'll keep you updated in every
          step.
        </p>{" "}
        <p>
          3. I'll post commissions since it helps me build portfolio, if you
          don't want to, tell me in advance.{" "}
        </p>
        <p>
          4. If you wish early stages like sketch, line art or flat colors, I
          can do it as well, we can discuss price via DM.
        </p>{" "}
        <p>
          5. I'll politely refuse any request I think I'm not able to draw.{" "}
        </p>
        <p>
          6. No refunds unless I'm unable to complete the artwork or haven't
          started yet.
        </p>{" "}
        <p>
          7. Send references, it'll make the work easier for us both! Examples:
          Photos for the pose, lighting, outfit and such. It can even be an
          anime screenshot or another artwork!{" "}
        </p>
        <p>
          8. After the line art is finished, big changes will cost as a fee.{" "}
        </p>
        <p>9. Additional characters are half of the original price.</p>{" "}
        <p>
          10. The commission is for personal use, for commercial use it will be
          double the price.
        </p>
      </div>
      <hr />
      <div>What I can draw:</div>
      <div>
        <ul>
          <li>
            <p>Anime/Game Fanarts;</p>
          </li>
        </ul>
      </div>
      <div>What I can't draw:</div>
    </div>
  );
}

export default App;
