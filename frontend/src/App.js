import "./App.css";
import {
  TwitterOutlined,
  RedditOutlined,
  InstagramOutlined,
  HomeOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import img1 from "../src/images/Screenshot_1.png";
import img2 from "../src/images/Screenshot_2.png";
import img3 from "../src/images/Screenshot_3.png";
import img4 from "../src/images/Screenshot_4.png";
import img5 from "../src/images/Screenshot_5.png";
import img6 from "../src/images/Screenshot_6.png";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <h1>MYTH SPHINX'S COMMISSIONS</h1>
        <h3>Status: OPEN</h3>
      </div>
      <div className="socials">
        <div id="twitter">
          <a href="https://twitter.com/myth0028">
            <TwitterOutlined /> Twitter
          </a>
        </div>
        <div id="reddit">
          <a href="https://www.reddit.com/user/MythSphinx">
            <RedditOutlined /> Reddit
          </a>
        </div>
      </div>
      <div id="insta">
        <a href="https://www.instagram.com/myth__art/">
          <InstagramOutlined /> Instagram
        </a>
      </div>
      <div className="socials">
        <div id="tumblr">
          <a href="https://mythsphinx.tumblr.com/">
            <LinkOutlined /> Tumblr
          </a>
        </div>
        <div id="pixiv">
          <a href="https://www.pixiv.net/en/users/30443444">
            <HomeOutlined /> Pixiv{" "}
          </a>
        </div>
      </div>

      <div className="email">
        <p>
          {" "}
          <div>E-mail: mythsphinx28@gmail.com</div>
          <div>Discord: Myth#2749</div>
        </p>
      </div>

      <div className="terms">
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
      <div className="fixingcans">
        <div className="cans">
          <b>What I can draw:</b>
        </div>
        <div className="cants">
          <b>What I can't draw:</b>
        </div>
        <div className="fixingcans2">
          <div className="canlist">
            <ul>
              <li>
                <p>Anime/Game Fanarts;</p>
                <li>
                  <p>Your OC;</p>
                </li>
                <li>
                  <p>V-Tubers Fanarts;</p>
                </li>
                <li>
                  <p>Female or male characters.</p>
                </li>
              </li>
            </ul>
          </div>

          <div className="cantlist">
            <ul>
              <li>
                <p>NSFW;</p>
                <li>
                  <p>Gore;</p>
                </li>
                <li>
                  <p>Mecha;</p>
                </li>
                <li>
                  <p>Furry (Kemonomimi Ok).</p>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="terms">
        <h3>
          If you're interested, please send me a DM with the following details:
        </h3>
        <ul>
          <li>
            <p>Character name and source;</p>
            <li>
              <p>Idea (Pose, expression, traits, etc.);</p>
            </li>
            <li>
              <p>As many references as possible!</p>
            </li>
          </li>
        </ul>
      </div>
      <hr />
      <h2>Headshot/Bust-up</h2>
      <h2>$30</h2>
      <img className="imgs" src={img1} alt="img1" />
      <img className="imgs" src={img2} alt="img2" />
      <hr />
      <h2>Waist-up/Half Body</h2>
      <h2>$40</h2>
      <img className="imgs" src={img3} alt="img3" />
      <img className="imgs" src={img4} alt="img4" />
      <hr />
      <h2>Full-sized with backgrounds</h2>
      <h2>$55</h2>
      <img className="imgs" src={img5} alt="img5" />
      <img className="imgs" src={img6} alt="img6" />
    </div>
  );
}

export default App;
