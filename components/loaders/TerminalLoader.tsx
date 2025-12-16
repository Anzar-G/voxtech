import React from 'react';

const TerminalLoader: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-navy-900">
            <div className="terminal-loader">
                <div className="terminal-header">
                    <div className="terminal-title">Status</div>
                    <div className="terminal-controls">
                        <div className="control close"></div>
                        <div className="control minimize"></div>
                        <div className="control maximize"></div>
                    </div>
                </div>
                <div className="text">Initializing AI...</div>
            </div>

            <style>{`
        @keyframes blinkCursor {
          50% {
            border-right-color: transparent;
          }
        }

        @keyframes typeAndDelete {
          0%,
          10% {
            width: 0;
          }
          45%,
          55% {
            width: 14ch; /* Adjusted for "Initializing AI..." length */
          }
          90%,
          100% {
            width: 0;
          }
        }

        .terminal-loader {
          border: 1px solid rgba(56, 189, 248, 0.3); /* electric-500/30 */
          background-color: #0a192f; /* navy-900 approx */
          color: #38bdf8; /* electric-300 */
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          font-size: 1.25em;
          padding: 3em 1.5em 1.5em;
          width: 20em;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          border-radius: 8px;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }

        .terminal-header {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2em;
          background-color: rgba(23, 42, 69, 0.8); /* navy-800 approx */
          border-bottom: 1px solid rgba(56, 189, 248, 0.1);
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          padding: 0 0.8em;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .terminal-controls {
          display: flex;
          gap: 6px;
        }

        .control {
          display: inline-block;
          width: 0.7em;
          height: 0.7em;
          border-radius: 50%;
        }

        .control.close {
          background-color: #ef4444;
        }

        .control.minimize {
          background-color: #eab308;
        }

        .control.maximize {
          background-color: #22c55e;
        }

        .terminal-title {
          font-size: 0.8em;
          color: rgba(255, 255, 255, 0.5);
        }

        .text {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          border-right: 3px solid #38bdf8; /* electric-300 */
          animation:
            typeAndDelete 3s steps(18) infinite,
            blinkCursor 0.5s step-end infinite alternate;
        }
      `}</style>
        </div>
    );
};

export default TerminalLoader;
