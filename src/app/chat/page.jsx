import Sidebar_test from "./components/sidebar"; // import the real one as a componant later
import Navbar_test from "./components/navbar"; // import the real one as a componant later
import { FaAngleDown } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import "./style.css";

// // import Image from 'next/image';
// // import Link from 'next/link';

// import { Sidebar } from '../Dashboard/sidebar';

// import { Inter, Montserrat } from 'next/font/google'
// const montserrat = Montserrat({
//     subsets: ['latin'],
//     variable: '--font-montserrat',
//   })

// // or w-full h-full  flex gap-4

// h-full
// h-screen: 100% of the viewport height.
// h-1/2: 50% of the parent height.
// h-auto: Height adjusts based on content.
// h-[size]: Custom height (e.g., h-64 for 16rem).

export default function ChatPage() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar_test />
      <div className="parent flex">
        <Sidebar_test />
        <div className="chat-section">
          <div className="boxes">
            <div className="friends-box">
              <div className="profil-infos">
                <div className="image">
                  <img src="/images/avatarprofile.svg" />
                </div>
                <div className="infos">
                  <h3>Knetero Jack</h3>
                  <span className="status">Online</span>
                </div>
              </div>
              <h2>Messages List</h2>
              <div className="messages-list">
                <div className="friend-info">
                  <div className="image">
                    <img src="/images/avatarprofile.svg" />
                  </div>
                  <div className="infos">
                    <h3>Maria Smith</h3>
                    <div className="msg-info">
                      <p className="last-msg">Graet Game! Rematch tomorrow?</p>
                      <span className="msg-status"></span>
                    </div>
                    <span className="msg-time">2:15 AM</span>
                  </div>
                </div>
                <div className="friend-info">
                  <div className="image">
                    <img src="/images/avatarprofile.svg" />
                  </div>
                  <div className="infos">
                    <h3>Maria Smith</h3>
                    <div className="msg-info">
                      <p className="last-msg">Graet Game! Rematch tomorrow?</p>
                      <span className="msg-status"></span>
                    </div>
                    <span className="msg-time">2:15 AM</span>
                  </div>
                </div>
                <div className="friend-info">
                  <div className="image">
                    <img src="/images/avatarprofile.svg" />
                  </div>
                  <div className="infos">
                    <h3>Maria Smith</h3>
                    <div className="msg-info">
                      <p className="last-msg">Graet Game! Rematch tomorrow?</p>
                      <span className="msg-status"></span>
                    </div>
                    <span className="msg-time">2:15 AM</span>
                  </div>
                </div>
                {/* Start */}
                <div className="friend-info">
                  <div className="image">
                    <img src="/images/avatarprofile.svg" />
                  </div>
                  <div className="infos">
                    <h3>Maria Smith</h3>
                    <div className="msg-info">
                      <p className="last-msg">Graet Game! Rematch tomorrow?</p>
                      <span className="msg-status"></span>
                    </div>
                    <span className="msg-time">2:15 AM</span>
                  </div>
                </div>
                <div className="friend-info">
                  <div className="image">
                    <img src="/images/avatarprofile.svg" />
                  </div>
                  <div className="infos">
                    <h3>Maria Smith</h3>
                    <div className="msg-info">
                      <p className="last-msg">Graet Game! Rematch tomorrow?</p>
                      <span className="msg-status"></span>
                    </div>
                    <span className="msg-time">2:15 AM</span>
                  </div>
                </div>
                <div className="friend-info">
                  <div className="image">
                    <img src="/images/avatarprofile.svg" />
                  </div>
                  <div className="infos">
                    <h3>Maria Smith</h3>
                    <div className="msg-info">
                      <p className="last-msg">Graet Game! Rematch tomorrow?</p>
                      <span className="msg-status"></span>
                    </div>
                    <span className="msg-time">2:15 AM</span>
                  </div>
                </div>
                <div className="friend-info">
                  <div className="image">
                    <img src="/images/avatarprofile.svg" />
                  </div>
                  <div className="infos">
                    <h3>Maria Smith</h3>
                    <div className="msg-info">
                      <p className="last-msg">Graet Game! Rematch tomorrow?</p>
                      <span className="msg-status"></span>
                    </div>
                    <span className="msg-time">2:15 AM</span>
                  </div>
                </div>
                <div className="friend-info">
                  <div className="image">
                    <img src="/images/avatarprofile.svg" />
                  </div>
                  <div className="infos">
                    <h3>Maria Smith</h3>
                    <div className="msg-info">
                      <p className="last-msg">Graet Game! Rematch tomorrow?</p>
                      <span className="msg-status"></span>
                    </div>
                    <span className="msg-time">2:15 AM</span>
                  </div>
                </div>
                <div className="friend-info">
                  <div className="image">
                    <img src="/images/avatarprofile.svg" />
                  </div>
                  <div className="infos">
                    <h3>Maria Smith</h3>
                    <div className="msg-info">
                      <p className="last-msg">Graet Game! Rematch tomorrow?</p>
                      <span className="msg-status"></span>
                    </div>
                    <span className="msg-time">2:15 AM</span>
                  </div>
                </div>
                <div className="friend-info">
                  <div className="image">
                    <img src="/images/avatarprofile.svg" />
                  </div>
                  <div className="infos">
                    <h3>Maria Smith</h3>
                    <div className="msg-info">
                      <p className="last-msg">Graet Game! Rematch tomorrow?</p>
                      <span className="msg-status"></span>
                    </div>
                    <span className="msg-time">2:15 AM</span>
                  </div>
                </div>
                <div className="friend-info">
                  <div className="image">
                    <img src="/images/avatarprofile.svg" />
                  </div>
                  <div className="infos">
                    <h3>Maria Smith</h3>
                    <div className="msg-info">
                      <p className="last-msg">Graet Game! Rematch tomorrow?</p>
                      <span className="msg-status"></span>
                    </div>
                    <span className="msg-time">2:15 AM</span>
                  </div>
                </div>
                <div className="friend-info">
                  <div className="image">
                    <img src="/images/avatarprofile.svg" />
                  </div>
                  <div className="infos">
                    <h3>Maria Smith</h3>
                    <div className="msg-info">
                      <p className="last-msg">Graet Game! Rematch tomorrow?</p>
                      <span className="msg-status"></span>
                    </div>
                    <span className="msg-time">2:15 AM</span>
                  </div>
                </div>
                {/* End */}
              </div>
            </div>
            <div className="messages-box">
              <div className="friend-infos">
                <div className="his-profil">
                  <div className="image">
                    <img src="/images/avatarprofile.svg" />
                  </div>
                  <div className="infos">
                    <h3>
                      John Smith<span className="status-icon"></span>
                    </h3>
                    <span className="status">Online</span>
                  </div>
                </div>
                <FaAngleDown className="bottom-icon" />
              </div>
              <div className="peer-to-peer">
                <div className="friend-msg-box">
                  <div className="image">
                    <img src="/images/avatarprofile.svg" />
                  </div>
                  <div className="msg">
                    <span className="msg-time">Today 2:22 AM</span>
                    <p>Hey Knetero, up for a ping pong match this evening?</p>
                  </div>
                </div>
                <div className="my-msg-box">
                  <p className="msg">
                    Absolutely! What time were you thinking?
                  </p>
                </div>
                {/* Test Start Here */}
                <div className="friend-msg-box">
                  <div className="image">
                    <img src="/images/avatarprofile.svg" />
                  </div>
                  <div className="msg">
                    <span className="msg-time">Today 2:22 AM</span>
                    <p>Hey Knetero, up for a ping pong match this evening?</p>
                  </div>
                </div>
                <div className="my-msg-box">
                  <p className="msg">
                    Absolutely! What time were you thinking?
                  </p>
                </div>
                <div className="friend-msg-box">
                  <div className="image">
                    <img src="/images/avatarprofile.svg" />
                  </div>
                  <div className="msg">
                    <span className="msg-time">Today 2:22 AM</span>
                    <p>Hey Knetero, up for a ping pong match this evening?</p>
                  </div>
                </div>
                <div className="my-msg-box">
                  <p className="msg">
                    Absolutely! What time were you thinking?
                  </p>
                </div>
                <div className="friend-msg-box">
                  <div className="image">
                    <img src="/images/avatarprofile.svg" />
                  </div>
                  <div className="msg">
                    <span className="msg-time">Today 2:22 AM</span>
                    <p>Hey Knetero, up for a ping pong match this evening?</p>
                  </div>
                </div>
                <div className="my-msg-box">
                  <p className="msg">
                    Absolutely! What time were you thinking?
                  </p>
                </div>
                {/* Test End Here */}
              </div>
              <div className="send-msg">
                <input type="text" placeholder="Message" />
                <RiSendPlaneLine className="send-msg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
