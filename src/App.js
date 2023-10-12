import React, { useState, useEffect } from "react";
import "./App.css";
import ImageSlider from "./ImageSlider";
import Services from "./Services";

const imageURL =
  "https://scontent.fnbo16-1.fna.fbcdn.net/v/t39.30808-6/270760671_1275542242948074_8753695886020142405_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GIw1n3iInq4AX_EEx9P&_nc_ht=scontent.fnbo16-1.fna&oh=00_AfCfvYjTmqj1g95Kt73HKNUZLScH7iVeukqGCkDIoL7sfQ&oe=652B94F9";

const asset4PEFA =
  "https://scontent.fnbo16-1.fna.fbcdn.net/v/t1.6435-9/62532219_620039218498383_8496691874206056448_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7a1959&_nc_ohc=mOQW9V_wXWIAX9IgBpp&_nc_ht=scontent.fnbo16-1.fna&oh=00_AfBYDxjxHLPMppV1gS-XFDs69XR9POQmkRSDlI0m__7FOA&oe=654BF1C7";

const App = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [servicesClicked, setServicesClicked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Remove this line if you're not using currentImageIndex
      // setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleVideoPlay = () => {
    setVideoPlaying(true);
  };

  const handleServicesClick = () => {
    setServicesClicked(!servicesClicked);
  };

  return (
    <div className="block relative custom-height">
      <div className="app-container"></div>

      <div className="header">
        <img src={imageURL} alt="Church Icon" className="icon" />
        <h1 className="church-name">PEFA GIKOMBA CHURCH</h1>
        <button className="login-button">Login Now</button>
      </div>
      {/* Closing header div */}
      <div className="main-navbar">
        <div className="frame">Home</div>
        <div className="frame" onClick={handleServicesClick}>
          Services
        </div>
        {servicesClicked ? <Services /> : null}
        <div className="frame">Ministries</div>
        <div className="frame">Events</div>
        <div className="frame">Blog</div>
        <div className="frame">About Us</div>
        <div className="frame">Contact Us</div>
      </div>
      <div className="frame-8">
        <ImageSlider /> {/* Include the ImageSlider component */}
        <div className="rectangle-1">
          <img
            src="https://scontent.fnbo16-1.fna.fbcdn.net/v/t1.6435-9/62113269_620090198493285_8591367118212038656_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=IrzWidD1Yn8AX9O3bK3&_nc_ht=scontent.fnbo16-1.fna&oh=00_AfD5A2ozvh7PWJnKf5B10QREa0-hXA9pzdVlq3SWE-y5Dg&oe=654F1BA2"
            alt="Sunday Services"
          />
          <div className="text">
            <p>SUNDAY SERVICES</p>
          </div>
        </div>
        <div className="rectangle-2">
          <img
            src="https://scontent.fnbo16-1.fna.fbcdn.net/v/t39.30808-6/370299087_354790583539247_6156434972322714641_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=INqI_AOtRMsAX_ZlOGy&_nc_ht=scontent.fnbo16-1.fna&oh=00_AfATCdsG43rR7I4bOGGS3Itg1TOD_Xd-kkGjmVvD-_DPLg&oe=652C7585"
            alt="Sunday School"
          />

          <div className="text">
            <p>SUNDAY SCHOOL</p>
          </div>
        </div>
        <div className="line-1"></div>
        <div className="rectangle-3">
          <img
            src="https://scontent.fnbo16-1.fna.fbcdn.net/v/t39.30808-6/383774907_368304585521180_3453436903228335123_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5614bc&_nc_ohc=35fVNIyDaaUAX__u-M0&_nc_ht=scontent.fnbo16-1.fna&oh=00_AfB_hU-DveDzz3lq9MF9XMjpC-iUWeBK9tDjxnH91trNmA&oe=652C8CD5"
            alt="Sifa Concert"
          />

          <div className="text">
            <p>SIFA CONCERT</p>
          </div>
        </div>
        <div className="line-2"></div>
        <div className="rectangle-4">
          <img
            src="https://scontent.fnbo16-1.fna.fbcdn.net/v/t39.30808-6/374575357_355241076827531_1405541083556556970_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PUs5aOCkXjwAX-2Tz1x&_nc_ht=scontent.fnbo16-1.fna&oh=00_AfA-wERBLwZPRu0tKvLweI0tIrIpuMObwuzWY1qTppgnLA&oe=652C2EE9"
            alt="Street Worships & Crusades"
          />
          <div className="text">
            <p>STREET WORSHIPS & CRUSADES</p>
          </div>
        </div>
        <div className="line-3"></div>
        {/* Rectangle 5 - First Position */}
        <div className="rectangle-5">
          <img
            src="https://scontent.fnbo16-1.fna.fbcdn.net/v/t39.30808-6/272989868_1298021987366766_5402743078264309020_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=813123&_nc_ohc=Cvf1NICILxEAX-IQp5G&_nc_ht=scontent.fnbo16-1.fna&oh=00_AfCTOQxk2yGJY-wjsn8tIBjvUKv3vewAsLY6UvnqCE2XCw&oe=652C1DE0"
            alt="Church Choir"
          />
          <div className="text">
            <p>CHURCH CHOIR</p>
          </div>
          <div className="rectangle-6">
            {/* Asset 4 with image */}
            <div className="asset-4">
              <img src={asset4PEFA} alt="Asset 4" />
            </div>
            {/* Text inside Rectangle 6 */}
            <div className="text-inside-rectangle-6">
              <p>PEFA GIKOMBA CHURCH IS A PLACE TO BE</p>
            </div>
            {/* Inspirational Quotes */}
            <ul className="inspirational-quotes">
              <li>Believe in yourself and trust in God always.</li>
              <li>Chase your dreams relentlessly.</li>
              <li>Embrace change with courage by reading the word of God.</li>
              <li>Spread kindness wherever you go.</li>
              <li>Never stop learning and growing in Christ.</li>
            </ul>
          </div>
          <div className="rectangle-7">
            <div className="life-text">LIFE AT PEFA GIKOMBA CHURCH</div>
            <div className="life-description">
              Your time at PEFA GIKOMBA CHURCH is a great opportunity to
              discover, develop, and deploy your Christian Ministry. Come All In
              And Fellowship With us as one Family.
            </div>
          </div>
          <div className="rectangle-8">
            <div className="image-8"></div>
            <div className="text-8">Prayer Services every Tuesday</div>
          </div>
          <div className="rectangle-9">
            <div className="image-9"></div>
            <div className="text-9">Transport Services Available</div>
          </div>
          <div className="rectangle-10">
            <div className="image-10"></div>
            <div className="text-10">Youth Week Services</div>
          </div>
          <div className="rectangle-11">
            <div className="image-11"></div>
            <div className="text-11">
              Bible Study Services every Thursday & Friday
            </div>
          </div>

          <div className="App">
            <div className="Rectangle6">
              {/* Yellow Popping Emoji Hand */}
              {!videoPlaying && (
                <div className="pop-emoji-hand">
                  👋
                  <div className="text">
                    Click Here to see one of our videos with a powerful Message
                  </div>
                </div>
              )}

              {/* Embed the YouTube video */}
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/OgG6jnmitxI"
                title="YouTube Video"
                frameBorder="0"
                allowFullScreen
                onClick={handleVideoPlay}
              ></iframe>
            </div>
            <div className="Rectangle12">
              <div className="Frame">
                <div className="Frame">
                  <p className="VerseText">
                    Joshua 1:9 (NIV)
                    <br />
                    Be strong and courageous. Do not be afraid; do not be
                    discouraged, for the Lord your God will be with you wherever
                    you go.
                  </p>
                  <p className="VerseText">
                    Psalm 34:18
                    <br />
                    The Lord is close to the brokenhearted, he saves those who
                    are crushed in spirit. When we're crushed in many ways, one
                    of the chief among those is the way the Bible describes our
                    last enemy: Death. Death, the basic word just means
                    separation and brokenness, deterioration.
                  </p>
                </div>
                <div className="custom-container">
                  <div className="custom-element">
                    <img
                      src="https://scontent.fnbo16-1.fna.fbcdn.net/v/t1.6435-9/66432083_635299143639057_8261322971986001920_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=6FcXE2L7SSsAX-U_mnQ&_nc_ht=scontent.fnbo16-1.fna&oh=00_AfAXRjVcktKxi1Rrcx82VFv-a-8f8H5NFlMxLwf2dtLKXg&oe=65498267"
                      alt="Background"
                      className="background-image"
                    />
                    <div className="content">
                      <p className="text">
                        Become A Member At PEFA GIKOMBA CHURCH
                      </p>
                      <button className="btn-primary">Register Today</button>
                    </div>

                    {/* Footer Section */}
                    <div className="footer">
                      <div className="group-17">
                        <div className="title">PEFA CHURCH</div>
                        <div className="text">
                          Location: iPR8Q+5Q6 pefa gikomba, Nairobi, 40
                        </div>
                        <div className="text">Hours: 7:00am – 5:00pm</div>
                        <div className="text">Telephone: 0754 569 687</div>
                        <div className="text">Email: angc68@gmail.com</div>
                      </div>

                      <div className="group-17">
                        <div className="title topic explore">EXPLORE</div>
                        <div className="text">Ministry & Mission</div>
                        <div className="text">Staff and Faculty</div>
                        <div className="text">Downloads</div>
                        <div className="text">Community</div>
                        <div className="text">Social Media</div>
                        <div className="text">Employment</div>
                      </div>

                      <div className="group-17">
                        <div className="title topic links">QUICK LINKS</div>
                        <div className="text">http://www.pefagikomba.org/</div>
                      </div>

                      <div className="group-17">
                        <div className="title topic research">RESEARCH</div>
                        <div className="text">
                          https://www.facebook.com/reel/1200676734170919?mibextid=kcDB8O
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
