import React from 'react'

function Profile() {
  return (
    <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="page-content">
          {/* ***** Banner Start ***** */}
          <div className="row">
            <div className="col-lg-12">
              <div className="main-profile ">
                <div className="row">
                  <div className="col-lg-4">
                    <img
                      src="assets/images/profile.jpg"
                      alt=""
                      style={{ borderRadius: 23 }}
                    />
                  </div>
                  <div className="col-lg-4 align-self-center">
                    <div className="main-info header-text">
                      <span>Offline</span>
                      <h4>Alan Smithee</h4>
                      <p>
                        You Haven't Gone Live yet. Go Live By Touching The Button
                        Below.
                      </p>
                      <div className="main-border-button">
                        <a href="#">Start Live Stream</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 align-self-center">
                    <ul>
                      <li>
                        Games Downloaded <span>3</span>
                      </li>
                      <li>
                        Friends Online <span>16</span>
                      </li>
                      <li>
                        Live Streams <span>None</span>
                      </li>
                      <li>
                        Clips <span>29</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="clips">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="heading-section">
                            <h4>
                              <em>Your Most Popular</em> Clips
                            </h4>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                          <div className="item">
                            <div className="thumb">
                              <img
                                src="assets/images/clip-01.jpg"
                                alt=""
                                style={{ borderRadius: 23 }}
                              />
                              <a
                                href="https://www.youtube.com/watch?v=r1b03uKWk_M"
                                target="_blank"
                              >
                                <i className="fa fa-play" />
                              </a>
                            </div>
                            <div className="down-content">
                              <h4>First Clip</h4>
                              <span>
                                <i className="fa fa-eye" /> 250
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                          <div className="item">
                            <div className="thumb">
                              <img
                                src="assets/images/clip-02.jpg"
                                alt=""
                                style={{ borderRadius: 23 }}
                              />
                              <a
                                href="https://www.youtube.com/watch?v=r1b03uKWk_M"
                                target="_blank"
                              >
                                <i className="fa fa-play" />
                              </a>
                            </div>
                            <div className="down-content">
                              <h4>Second Clip</h4>
                              <span>
                                <i className="fa fa-eye" /> 183
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                          <div className="item">
                            <div className="thumb">
                              <img
                                src="assets/images/clip-03.jpg"
                                alt=""
                                style={{ borderRadius: 23 }}
                              />
                              <a
                                href="https://www.youtube.com/watch?v=r1b03uKWk_M"
                                target="_blank"
                              >
                                <i className="fa fa-play" />
                              </a>
                            </div>
                            <div className="down-content">
                              <h4>Third Clip</h4>
                              <span>
                                <i className="fa fa-eye" /> 141
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                          <div className="item">
                            <div className="thumb">
                              <img
                                src="assets/images/clip-04.jpg"
                                alt=""
                                style={{ borderRadius: 23 }}
                              />
                              <a
                                href="https://www.youtube.com/watch?v=r1b03uKWk_M"
                                target="_blank"
                              >
                                <i className="fa fa-play" />
                              </a>
                            </div>
                            <div className="down-content">
                              <h4>Fourth Clip</h4>
                              <span>
                                <i className="fa fa-eye" /> 91
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="main-button">
                            <a href="#">Load More Clips</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ***** Banner End ***** */}
          {/* ***** Gaming Library Start ***** */}
          <div className="gaming-library profile-library">
            <div className="col-lg-12">
              <div className="heading-section">
                <h4>
                  <em>Your Gaming</em> Library
                </h4>
              </div>
              <div className="item">
                <ul>
                  <li>
                    <img
                      src="assets/images/game-01.jpg"
                      alt=""
                      className="templatemo-item"
                    />
                  </li>
                  <li>
                    <h4>Dota 2</h4>
                    <span>Sandbox</span>
                  </li>
                  <li>
                    <h4>Date Added</h4>
                    <span>24/08/2036</span>
                  </li>
                  <li>
                    <h4>Hours Played</h4>
                    <span>634 H 22 Mins</span>
                  </li>
                  <li>
                    <h4>Currently</h4>
                    <span>Downloaded</span>
                  </li>
                  <li>
                    <div className="main-border-button border-no-active">
                      <a href="#">Donwloaded</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="item">
                <ul>
                  <li>
                    <img
                      src="assets/images/game-02.jpg"
                      alt=""
                      className="templatemo-item"
                    />
                  </li>
                  <li>
                    <h4>Fortnite</h4>
                    <span>Sandbox</span>
                  </li>
                  <li>
                    <h4>Date Added</h4>
                    <span>22/06/2036</span>
                  </li>
                  <li>
                    <h4>Hours Played</h4>
                    <span>745 H 22 Mins</span>
                  </li>
                  <li>
                    <h4>Currently</h4>
                    <span>Downloaded</span>
                  </li>
                  <li>
                    <div className="main-border-button border-no-active">
                      <a href="#">Donwloaded</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="item last-item">
                <ul>
                  <li>
                    <img
                      src="assets/images/game-03.jpg"
                      alt=""
                      className="templatemo-item"
                    />
                  </li>
                  <li>
                    <h4>CS-GO</h4>
                    <span>Sandbox</span>
                  </li>
                  <li>
                    <h4>Date Added</h4>
                    <span>21/04/2022</span>
                  </li>
                  <li>
                    <h4>Hours Played</h4>
                    <span>632 H 46 Mins</span>
                  </li>
                  <li>
                    <h4>Currently</h4>
                    <span>Downloaded</span>
                  </li>
                  <li>
                    <div className="main-border-button border-no-active">
                      <a href="#">Donwloaded</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* ***** Gaming Library End ***** */}
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Profile