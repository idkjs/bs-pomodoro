import * as React from 'react';
import './App.css';
import { usePomodoro } from '@idkjs/bs-pomodoro';

function ClockDemo({ initialTime }) {
  const [time, startPomodoro, stopPomodoro, resetPomodoro] = usePomodoro(
    initialTime
  );
  console.log(initialTime);
  return (
    <main className="app manager">
      <div className="timer-container">
        <h1 id="time" className="countdown">
          {time}
        </h1>
      </div>

      <div>
        <div className="options">
          <div className="option">
            <div className="button-groups">
              <button
                id="start-button"
                className="button button--primary"
                onClick={startPomodoro}
              >
                Start
              </button>
              <button
                id="stop-button"
                className="button button--danger"
                onClick={stopPomodoro}
              >
                Stop
              </button>
              <button
                id="reset-button"
                className="button button--reset"
                onClick={resetPomodoro}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export { ClockDemo };
