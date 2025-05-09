import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import Editor from "./Editor";
import useLocalStorage from "../hooks/useLocalStorage";

export default function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");
  const [logs, setLogs] = useState([]);

  const iframeRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const injectedConsoleScript = `
        (function() {
          const log = console.log;
          const error = console.error;
          const warn = console.warn;

          console.log = function(...args) {
            parent.postMessage({ type: 'log', data: args }, '*');
            log.apply(console, args);
          };

          console.error = function(...args) {
            parent.postMessage({ type: 'error', data: args }, '*');
            error.apply(console, args);
          };

          console.warn = function(...args) {
            parent.postMessage({ type: 'warn', data: args }, '*');
            warn.apply(console, args);
          };
        })();
      `;

      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${injectedConsoleScript + js}<\/script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  useEffect(() => {
    const handleMessage = (event) => {
      const { type, data } = event.data;
      if (['log', 'error', 'warn'].includes(type)) {
        setLogs(prev => [...prev, { type, data }]);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JAVASCRIPT"
          value={js}
          onChange={setJs}
        />
      </div>

      <div className="pane">
        <iframe
          ref={iframeRef}
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>

      <div className="console-pane">
        {logs.map((log, index) => (
          <div key={index} className={`log-${log.type}`}>
            {log.data.join(" ")}
          </div>
        ))}
      </div>
    </>
  );
}
