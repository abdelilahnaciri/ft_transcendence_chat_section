"use client";

import Sidebar_test from "./components/sidebar"; // import the real one as a componant later
import Navbar_test from "./components/navbar"; // import the real one as a componant later
import { FaAngleDown } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import "./style.css";
import { useState } from "react";

// Import UseState to toggle friends box

export default function ChatPage() {
  function activeShow() {
    const tog = document.getElementsByClassName("menu-list");
    tog[0].classList.toggle("active");
  }
  let mymsgbox;
  function sendMsg(e) {
    // console.log(e);
    if (e.code === "Enter" || e.type === "click") {
      let inputText = document.getElementsByClassName("msg-to-send");
      if (inputText[0].value.trim() !== "") {
        mymsgbox = document.createElement("div");
        let peertopeer = document.getElementsByClassName("peer-to-peer");
        mymsgbox.className = "my-msg-box";
        mymsgbox.innerHTML += `<p class="msg">${inputText[0].value}</p>`;
        // console.log(mymsgbox);
        peertopeer[0].appendChild(mymsgbox);
        inputText[0].value = "";
        peertopeer[0].scrollTo({
          top: peertopeer[0].scrollHeight,
          left: 0,
          behavior: "smooth",
        });
      }
      return mymsgbox;
    }
    // flag = true;
    // if (e.code === "Enter") {
    //   msg = (
    //     <div className="my-msg-box">
    //       <p className="msg">Absolutely! What time were you thinking?</p>
    //     </div>
    //   );
    //   console.log(msg);
    //   return msg;
    // }
  }
  return (
    <div className="flex flex-col h-screen">
      <Navbar_test />
      <div className="parent flex">
        <Sidebar_test />
        <div className="chat-section">
          <div className="boxes">
            <div className="friends-box">
              <RxHamburgerMenu className="toggle-menu" onClick={activeShow} />
              <div className="menu-list">
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
                        <p className="last-msg">
                          Graet Game! Rematch tomorrow?
                        </p>
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
                        <p className="last-msg">
                          Graet Game! Rematch tomorrow?
                        </p>
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
                        <p className="last-msg">
                          Graet Game! Rematch tomorrow?
                        </p>
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
                        <p className="last-msg">
                          Graet Game! Rematch tomorrow?
                        </p>
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
                        <p className="last-msg">
                          Graet Game! Rematch tomorrow?
                        </p>
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
                        <p className="last-msg">
                          Graet Game! Rematch tomorrow?
                        </p>
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
                        <p className="last-msg">
                          Graet Game! Rematch tomorrow?
                        </p>
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
                        <p className="last-msg">
                          Graet Game! Rematch tomorrow?
                        </p>
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
                        <p className="last-msg">
                          Graet Game! Rematch tomorrow?
                        </p>
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
                        <p className="last-msg">
                          Graet Game! Rematch tomorrow?
                        </p>
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
                        <p className="last-msg">
                          Graet Game! Rematch tomorrow?
                        </p>
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
                        <p className="last-msg">
                          Graet Game! Rematch tomorrow?
                        </p>
                        <span className="msg-status"></span>
                      </div>
                      <span className="msg-time">2:15 AM</span>
                    </div>
                  </div>
                  {/* End */}
                </div>
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
                    Hey Knetero, up for a ping pong match this evening?
                  </p>
                </div>
                {/* {mymsgbox} */}
                {/* Test End Here */}
              </div>
              <div className="send-msg">
                <input
                  className="msg-to-send"
                  type="text"
                  placeholder="Message"
                  onKeyDown={sendMsg}
                />
                <RiSendPlaneLine className="send-msg" onClick={sendMsg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
