import React, { useState } from "react";
import dayImg from "../../../images/day_img.png";
import "./galleryPage.css";

const GalleryPage = () => {
  const [isActive, setIsActive] = useState("itinerary");

  const handleClick = (OptId) => {
    setIsActive(OptId);
  };

  return (
    <div className="ms-[50px] me-[10px]">
      <div className="info_section flex ">
        <div className="schedule w-[797px]">
          
          <div className="options">
            <button
              onClick={() => handleClick("itinerary")}
              className={isActive === "itinerary" ? "active" : ""}
            >
              Itinerary
            </button>
            <button
              onClick={() => handleClick("summary")}
              className={isActive === "summary" ? "active" : ""}
            >
              Summary
            </button>
            <button
              onClick={() => handleClick("information")}
              className={isActive === "information" ? "active" : ""}
            >
              Information
            </button>
          </div>

          <div className="info_container">
            {isActive === "itinerary" && (
              <div>
                <h3>Day wise Itinerary</h3>

                <div className="day_card">
                  <div className="day_title">
                    <h4>Day1- some text of day one </h4>
                  </div>
                  <div className="day_body">
                    <img src={dayImg} alt="" />
                    <div className="day_info">
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet consectetur. Id duis cursus
                          blandit odio. Sem maecenas nam vitae faucibus in. Sed
                          viverra venenatis turpis dignissim in. Libero viverra
                          quam id pulvinar nulla leo eget ridiculus
                          pharetra.Lorem ipsum dolor sit amet consectetur. Id
                          duis cursus blandit odio. Sem maecenas nam vitae
                          faucibus in.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="day_card">
                  <div className="day_title">
                    <h4>Day2- some text of day one </h4>
                  </div>
                  <div className="day_body">
                    <img src={dayImg} alt="" />
                    <div className="day_info">
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet consectetur. Id duis cursus
                          blandit odio. Sem maecenas nam vitae faucibus in. Sed
                          viverra venenatis turpis dignissim in. Libero viverra
                          quam id pulvinar nulla leo eget ridiculus
                          pharetra.Lorem ipsum dolor sit amet consectetur. Id
                          duis cursus blandit odio. Sem maecenas nam vitae
                          faucibus in.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="day_card">
                  <div className="day_title">
                    <h4>Day3- some text of day one </h4>
                  </div>
                  <div className="day_body">
                    <img src={dayImg} alt="" />
                    <div className="day_info">
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet consectetur. Id duis cursus
                          blandit odio. Sem maecenas nam vitae faucibus in. Sed
                          viverra venenatis turpis dignissim in. Libero viverra
                          quam id pulvinar nulla leo eget ridiculus
                          pharetra.Lorem ipsum dolor sit amet consectetur. Id
                          duis cursus blandit odio. Sem maecenas nam vitae
                          faucibus in.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="day_card">
                  <div className="day_title">
                    <h4>Day4- some text of day one </h4>
                  </div>
                  <div className="day_body">
                    <img src={dayImg} alt="" />
                    <div className="day_info">
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet consectetur. Id duis cursus
                          blandit odio. Sem maecenas nam vitae faucibus in. Sed
                          viverra venenatis turpis dignissim in. Libero viverra
                          quam id pulvinar nulla leo eget ridiculus
                          pharetra.Lorem ipsum dolor sit amet consectetur. Id
                          duis cursus blandit odio. Sem maecenas nam vitae
                          faucibus in.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {isActive === "summary" && (
              <div>
                <h3>Summary</h3>

                <div className="day_card">
                  <div className="day_title">
                    <h4>package Over View </h4>
                  </div>
                  <div className="day_body">
                    <div className="day_info">
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet consectetur. Id duis cursus
                          blandit odio. Sem maecenas nam vitae faucibus in.
                        </li>
                        <li>
                          Sed viverra venenatis turpis dignissim in. Libero
                          viverra quam id pulvinar nulla leo eget ridiculus
                          pharetra.
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet consectetur. Id duis cursus
                          blandit odio. Sem maecenas nam vitae faucibus in.
                          Lorem ipsum dolor sit amet consectetur. Id duis cursus
                          blandit odio. Sem maecenas nam vitae faucibus in.
                        </li>
                        <li>
                          Sed viverra venenatis turpis dignissim in. Libero
                          viverra quam id pulvinar nulla leo eget ridiculus
                          pharetra.
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet consectetur. Id duis cursus
                          blandit odio. Sem maecenas nam vitae faucibus in.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="day_card">
                  <div className="day_title">
                    <h4>package Over View </h4>
                  </div>
                  <div className="day_body overview_body">
                    <div className="day_info">
                      <div className="overview_card">
                        <div className="overview_title">
                          <h5>Travel Validity</h5>
                        </div>
                        <div className="overview_info">
                          <ul>
                            <li>
                              Lorem ipsum dolor sit amet consectetur. Id duis
                              cursus blandit odio. Sem maecenas nam vitae
                              faucibus in.
                            </li>
                            <li>
                              Sed viverra venenatis turpis dignissim in. Libero
                              viverra quam id pulvinar nulla leo eget ridiculus
                              pharetra.
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="overview_card">
                        <div className="overview_title">
                          <h5>Travel Validity</h5>
                        </div>
                        <div className="overview_info">
                          <ul>
                            <li>
                              Lorem ipsum dolor sit amet consectetur. Id duis
                              cursus blandit odio. Sem maecenas nam vitae
                              faucibus in.
                            </li>
                            <li>
                              Sed viverra venenatis turpis dignissim in. Libero
                              viverra quam id pulvinar nulla leo eget ridiculus
                              pharetra.
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="overview_card">
                        <div className="overview_title">
                          <h5>Travel Validity</h5>
                        </div>
                        <div className="overview_info">
                          <ul>
                            <li>
                              Lorem ipsum dolor sit amet consectetur. Id duis
                              cursus blandit odio. Sem maecenas nam vitae
                              faucibus in.
                            </li>
                            <li>
                              Sed viverra venenatis turpis dignissim in. Libero
                              viverra quam id pulvinar nulla leo eget ridiculus
                              pharetra.
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="overview_card">
                        <div className="overview_title">
                          <h5>Travel Validity</h5>
                        </div>
                        <div className="overview_info">
                          <ul>
                            <li>
                              Lorem ipsum dolor sit amet consectetur. Id duis
                              cursus blandit odio. Sem maecenas nam vitae
                              faucibus in.
                            </li>
                            <li>
                              Sed viverra venenatis turpis dignissim in. Libero
                              viverra quam id pulvinar nulla leo eget ridiculus
                              pharetra.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {isActive === "information" && (
              <div>
                <h3>Information</h3>

                <div className="day_card">
                  <div className="day_title">
                    <h4>package Over View </h4>
                  </div>
                  <div className="day_body">
                    <div className="day_info">
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet consectetur. Id duis cursus
                          blandit odio. Sem maecenas nam vitae faucibus in.
                        </li>
                        <li>
                          Sed viverra venenatis turpis dignissim in. Libero
                          viverra quam id pulvinar nulla leo eget ridiculus
                          pharetra.
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet consectetur. Id duis cursus
                          blandit odio. Sem maecenas nam vitae faucibus in.
                          Lorem ipsum dolor sit amet consectetur. Id duis cursus
                          blandit odio. Sem maecenas nam vitae faucibus in.
                        </li>
                        <li>
                          Sed viverra venenatis turpis dignissim in. Libero
                          viverra quam id pulvinar nulla leo eget ridiculus
                          pharetra.
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet consectetur. Id duis cursus
                          blandit odio. Sem maecenas nam vitae faucibus in.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="day_card">
                  <div className="day_title">
                    <h4>package Over View </h4>
                  </div>
                  <div className="day_body overview_body">
                    <div className="day_info">
                      <div className="overview_card">
                        <div className="overview_title">
                          <h5>Travel Validity</h5>
                        </div>
                        <div className="overview_info">
                          <ul>
                            <li>
                              Lorem ipsum dolor sit amet consectetur. Id duis
                              cursus blandit odio. Sem maecenas nam vitae
                              faucibus in.
                            </li>
                            <li>
                              Sed viverra venenatis turpis dignissim in. Libero
                              viverra quam id pulvinar nulla leo eget ridiculus
                              pharetra.
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="overview_card">
                        <div className="overview_title">
                          <h5>Travel Validity</h5>
                        </div>
                        <div className="overview_info">
                          <ul>
                            <li>
                              Lorem ipsum dolor sit amet consectetur. Id duis
                              cursus blandit odio. Sem maecenas nam vitae
                              faucibus in.
                            </li>
                            <li>
                              Sed viverra venenatis turpis dignissim in. Libero
                              viverra quam id pulvinar nulla leo eget ridiculus
                              pharetra.
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="overview_card">
                        <div className="overview_title">
                          <h5>Travel Validity</h5>
                        </div>
                        <div className="overview_info">
                          <ul>
                            <li>
                              Lorem ipsum dolor sit amet consectetur. Id duis
                              cursus blandit odio. Sem maecenas nam vitae
                              faucibus in.
                            </li>
                            <li>
                              Sed viverra venenatis turpis dignissim in. Libero
                              viverra quam id pulvinar nulla leo eget ridiculus
                              pharetra.
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="overview_card">
                        <div className="overview_title">
                          <h5>Travel Validity</h5>
                        </div>
                        <div className="overview_info">
                          <ul>
                            <li>
                              Lorem ipsum dolor sit amet consectetur. Id duis
                              cursus blandit odio. Sem maecenas nam vitae
                              faucibus in.
                            </li>
                            <li>
                              Sed viverra venenatis turpis dignissim in. Libero
                              viverra quam id pulvinar nulla leo eget ridiculus
                              pharetra.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="price_sec">
          <div className="price_container">
            <h2>Fare Details</h2>
            <div className="fare_details">
              <h5>Basic Fare</h5>
              <div className="price_section">
                <p>Adults</p>
                <span>₹11,999</span>
              </div>
              <div className="price_section">
                <p>Excluding applicable taxes</p>
              </div>
            </div>
            <div
              className={
                isActive === "information" ? "show fare_details" : "hide"
              }
            >
              <h5>Basic Fare</h5>
              <div className="price_section">
                <p>Adults(2x11,999)</p>
                <span>₹23,998</span>
              </div>
              <div className="price_section">
                <p>Tax + Other Charges</p>
                <span>₹2,150</span>
              </div>
              <div className="price_section">
                <span>Excluding applicable taxes</span>
              </div>
            </div>
            <div className="submit_btn">
              <a>Proceed to pay</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;