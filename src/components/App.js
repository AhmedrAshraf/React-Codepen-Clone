import React, { useState, useEffect } from "react";
import "./styles.css";
import Editor from "./Editor";
import useLocalStorage from "../hooks/useLocalStorage";

export default function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");
  const [livePreview, setLivePreview] = useState(true);
  

  useEffect(() => {
    if (!livePreview) return;
    const timeout = setTimeout(() => {
      setSrcDoc(`<html>
			<body>${html}</body>
			<style>${css}</style>
			<script>${js}</script>
			</html>`);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js,livePreview]);

  return (
    <>
        <div style={{ padding: "0.5rem" }}>
        <label>
          <input
            type="checkbox"
            checked={livePreview}
            onChange={() => setLivePreview(!livePreview)}
          />
          Live Preview
        </label>
      </div>
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
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

