/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import roleActivity from './assets/role-activity.svg';
import checkups from './assets/checkups-dark.svg';
import listedContracts from './assets/listed-contracts.svg';
import addContract from './assets/add-contract.svg';
import logOff from './assets/log-off.svg';
import overviewStatsWhite from './assets/overview-stats-white.svg';
import logo from './assets/sw-logo.svg';
import geometricLine from './assets/geometric-card-line-break.png';
import dPad from './assets/d-pad-logo.png';
import blueChartStroke from './assets/blue-chart-stroke.svg';
import blackChartStroke from './assets/black-chart-stroke.svg';
import ChartInteractions from './ChartInteractions';
import ChartNewUsers from './ChartNewUsers';
import ChartActiveUsers from './ChartActiveUsers';
import ChartRoles from './ChartRoles';
import dots from './assets/dots-icon.svg';

const AnalyticsDashboard = () => {
  const [currentChart, updateCurrentChart] = useState('interactions');
  const history = useHistory();
  const [loggingOff, setLoggingOff] = useState(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });
  const [settingsMenuHidden, setSettingsMenuHidden] = useState(true);
  const [transformProp, setTransformProp] = useState('translate3d(-120vw, 0, 0)');

  const updateChart = (event) => {
    updateCurrentChart(event.target.value);
  };

  const toggleSettings = () => {
    setSettingsMenuHidden(!settingsMenuHidden);
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    updateMenu(!settingsMenuHidden);
  };

  const updateMenu = (isHidden) => {
    isHidden === true ? setTransformProp('translate3d(-120vw, 0, 0)') : setTransformProp('translate3d(0vw, 0, 0)');
  };

  useEffect(() => {
    if (loggingOff) {
      const keys = ['header', 'imageUrl', 'header', 'contractAddress', 'username', 'tokenId', 'skillWallet'];
      keys.forEach((k) => {
        window.sessionStorage.removeItem(k);
      });

      history.push('/');
    }
  }, [loggingOff, history]);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <main className="analytics-main">
      <div className="analytics-sidebar">
        <div className="analytics-sidebar-design">
          <div className="user-header">
            <img src={logo} alt="d-pad logo" />
            {/* <h4>{username ? username : "Please sign in..."}</h4> */}
            <h4>Jabyl</h4>
          </div>

          <img className="line-break header-line" src={geometricLine} alt="line" />

          <div className="profit-sidebar-buttons">
            <div className="pill analytics-pill">
              <img src={overviewStatsWhite} alt="d-pad logo" />
              <h4>Analytics</h4>
            </div>

            <div className="pill contracts-pill">
              <img src={listedContracts} alt="d-pad logo" />
              <div className="listed-contracts">
                <h4>Listed Contracts</h4>
                {/* <form>
                                    <input placeholder="0x..." ></input>

                                    <input placeholder="0x..." ></input>

                                    <input placeholder="0x..." ></input>
                                </form> */}
                <div>
                  <p>0x8761345...134</p>
                  <p>0x0981934...357</p>
                </div>
              </div>
            </div>

            <div className="pill">
              <img src={addContract} alt="d-pad logo" />
              <h4>Add Contract</h4>
            </div>

            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <div className="pill" onClick={() => setLoggingOff(true)}>
              <img src={logOff} alt="d-pad logo" />
              <h4>Log off</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="analytics-content">
        <div className="analytics-content-design">
          <div id="flyoutMenu" className="flyout-div" style={{ transform: transformProp }}>
            <div className="profit-sidebar-buttons">
              <div className="pill analytics-pill">
                <img src={overviewStatsWhite} alt="d-pad logo" />
                <h4>Analytics</h4>
              </div>

              <div className="pill contracts-pill">
                <img src={listedContracts} alt="d-pad logo" />
                <div className="listed-contracts">
                  <h4>Listed Contracts</h4>
                  {/* <form>
                                    <input placeholder="0x..." ></input>

                                    <input placeholder="0x..." ></input>

                                    <input placeholder="0x..." ></input>
                                </form> */}
                  <div>
                    <p>0x8761345...134</p>
                    <p>0x0981934...357</p>
                  </div>
                </div>
              </div>

              <div className="pill">
                <img src={addContract} alt="d-pad logo" />
                <h4>Add Contract</h4>
              </div>

              {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
              <div className="pill" onClick={() => setLoggingOff(true)}>
                <img src={logOff} alt="d-pad logo" />
                <h4>Log off</h4>
              </div>
            </div>
          </div>

          <div className="header-row">
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <div className="settings-icon" onClick={() => toggleSettings()}>
              {isTabletOrMobile ? <img src={dots} alt="three dots" /> : null}
            </div>
            <div className="community-div dashboard-container">
              <img className="logo-img" src={dPad} alt="D Pad logo" />
              <h2>The Dark Dito</h2>
            </div>
            <div className="description-div dashboard-container">
              The greatest Description you could think of. A story about passion, cooperation, conflict & chaos - unveiling, word by word, a
              deeper truth about humankind. The greatest Description you could think of. A story about passion, cooperation, conflict &
              chaos - unveiling, word by word, a deeper truth about humankind.{' '}
            </div>
          </div>

          <div className="content-row">
            <div className="metrics-column">
              <div className="members-div dashboard-container">
                <div>
                  <p>
                    <u>Active Members</u>
                  </p>
                  <div>36</div>
                </div>
                <div>
                  <p>
                    <u>Last updated</u>
                  </p>
                  <div>2021/08/11 16:06</div>
                </div>
              </div>

              <div className="roles-div dashboard-container">
                <h3>
                  <u>Community Roles</u>
                </h3>

                <div className="community-role-metric">
                  <p>Creator</p>
                  <div className="role-icon">
                    <p>20</p>
                  </div>
                </div>

                <div className="community-role-metric">
                  <p>Collector</p>
                  <div className="role-icon">
                    <p>2</p>
                  </div>
                </div>

                <div className="community-role-metric">
                  <p>Curator</p>
                  <div className="role-icon">
                    <p>14</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="chart-div dashboard-container">
              <div>
                <div className="chart-nav">
                  <select id="chartType" name="chartType" onChange={(event) => updateChart(event)}>
                    <option value="interactions">Interactions</option>
                    <option value="newUsers">New Users</option>
                    <option value="activeUsers">Active Users</option>
                    <option value="roles">Roles</option>
                  </select>

                  <div>
                    <p>Daily</p>
                    <p>Weekly</p>
                    <p>Monthly</p>
                  </div>
                </div>

                {currentChart === 'interactions' ? (
                  <ChartInteractions />
                ) : currentChart === 'newUsers' ? (
                  <ChartNewUsers />
                ) : currentChart === 'activeUsers' ? (
                  <ChartActiveUsers />
                ) : currentChart === 'roles' ? (
                  <ChartRoles />
                ) : null}

                <div className="chart-buttons-div">
                  {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                  <button disabled className="disabled">
                    <p>Commmunity Checkups</p>
                    <img alt="Heartbeat monitor icon" src={roleActivity} />
                  </button>
                  <button disabled className="disabled">
                    <p>Role Activity</p>
                    <img alt="white notepad and stethoscope" src={checkups} />
                  </button>
                </div>
              </div>

              <div className="chart-legend">
                <div>
                  <img alt="blue line of a chart moving up and to the right" src={blueChartStroke} />
                  <p>0x8761345...134</p>
                </div>

                <div>
                  <img alt="black line of a chart moving up and to the right" src={blackChartStroke} />
                  <p>0x0981934...357</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AnalyticsDashboard;
