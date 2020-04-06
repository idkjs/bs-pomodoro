[@react.component]
let make = (~initialTime: string) => {
  let (time, startPomodoro, stopPomodoro, resetPomodoro) =
    UsePomodoro.usePomodoro(initialTime);

  <main className="app manager">
    <div className="timer-container">
      <h1 id="time" className="countdown"> {React.string(time)} </h1>
    </div>
    <div>
      <div className="options">
        <div className="option">
          <div className="button-groups">
            <button
              id="start-button"
              className="button button--primary"
              onClick={_ => startPomodoro()}>
              {React.string("Start")}
            </button>
            <button
              id="stop-button"
              className="button button--danger"
              onClick={_ => stopPomodoro()}>
              {React.string("Stop")}
            </button>
            <button
              id="reset-button"
              className="button button--reset"
              onClick={_ => resetPomodoro()}>
              {React.string("Reset")}
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>;
};
