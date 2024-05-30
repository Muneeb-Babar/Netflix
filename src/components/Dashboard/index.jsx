import About from "../About";
import MainFooter from "../MainFooter";
import "./app.css";

import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div style={{ backgroundColor: "black", height: "100vh" }}>
            <div className="dash-conatiner">
                <div className="lowColor">
                    <div className="container main-navbar">
                        <div className="logo-container">
                            <img
                                src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
                                style={{ width: "100px", height: "50px" }}
                            />
                        </div>
                        <div className="button-container">
                            <button
                                onClick={() => {
                                    navigate("/signup");
                                }}
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                    {/* Hero Section */}
                    <div className="hero">
                        <div style={{ textAlign: "center", color: "white" }}>
                            <h1>Unlimited movies, TV shows, and more</h1>
                        </div>
                        <div style={{ color: "white", textAlign: "center" }}>
                            <h4>Watch anywhere. Cancel anytime.</h4>
                        </div>
                        <div
                            style={{
                                color: "white",
                                fontSize: "1.4rem",
                                textAlign: "center",
                            }}
                        >
                            <p>
                                Ready to watch? Enter your email to create or restart your
                                membership.
                            </p>
                        </div>
                    </div>
                    {/* Hero input */}
                    <div className="hero-input">
                        <div>
                            <input placeholder="Enter Your Email" size={50} />
                        </div>
                        <div>
                            <button
                                style={{
                                    backgroundColor: "red",
                                    color: "white",
                                    padding: "12px 14px",
                                }}
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border"></div>
            {/* Gallery */}
            <div className="gallery-up">
                <div style={{ color: "white" }}>
                    <h1>Enjoy on your TV</h1>
                    <h4>
                        Watch on Smart TVs, Playstation, Xbox, Chromecast,
                        <br /> Apple TV, Blu-ray players, and more.
                    </h4>
                </div>
                <div>
                    <div className="default-ltr-cache-7cljuy e9eyrqp3">
                        <div className="default-ltr-cache-bjn8wh">
                            <div
                                data-uia="nmhp-card-animation-asset-motion"
                                className="default-ltr-cache-m5f3qu e15c37ii14"
                            >
                                <video
                                    data-uia="nmhp-card-animation-asset-video"
                                    autoPlay
                                    playsInline
                                    muted
                                    loop
                                >
                                    <source
                                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                                        type="video/mp4"
                                    />
                                </video>
                                <div className="default-ltr-cache-0"></div>
                                <div
                                    data-uia="nmhp-card-animation-asset-custom"
                                    aria-hidden="true"
                                    className="default-ltr-cache-0 e15c37ii13"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border"></div>
            <div className="gallery-down">
                <div>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
                </div>
                <div style={{ color: "white" }}>
                    <h1>
                        Download your shows to <br /> watch offline
                    </h1>
                    <h4>
                        Save your favorites easily and always have something <br /> to
                        watch.
                    </h4>
                </div>
            </div>
            <div className="border"></div>
            <div className="gallery-single-text">
                <div style={{ color: "white" }}>
                    <h1>
                        Watch <br />
                        everywhere
                    </h1>
                    <h4>
                        Stream unlimited movies and TV <br /> shows on your phone, tablet,
                        laptop, <br /> and TV.
                    </h4>
                </div>
                <div></div>
            </div>
            <div className="border"></div>
            <div className="gallery-down">
                <div>
                    <img src="https://occ-0-3780-64.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55" />
                </div>
                <div style={{ color: "white" }}>
                    <h1>Create profiles for kids</h1>
                    <h4>
                        Send kids on adventures with their favorite <br /> characters in a
                        space made just for them—free <br /> with your membership..
                    </h4>
                </div>
            </div>
            <div className="border"></div>
            {/* About */}
            <About/>
            <div className="about-bottom"><h4>Ready to watch? Enter your email to create or restart your membership.</h4>
            <div className="hero-input" style={{paddingTop:'20px'}}>
                        <div>
                            <input placeholder="Enter Your Email" size={50} />
                        </div>
                        <div>
                            <button
                                style={{
                                    backgroundColor: "red",
                                    color: "white",
                                    padding: "12px 14px",
                                }}
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                    </div>
                    <div className="border"></div>
                    {/* Footer */}
                    <MainFooter/>
        </div>
    );
};

export default Dashboard;
