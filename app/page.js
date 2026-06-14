"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [html, setHtml] = useState("");

  async function generateSite() {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    setHtml(data.html);
  }

  return (
    <main style={{padding:40}}>
      <h1>Vibra AI</h1>

      <textarea
        value={prompt}
        onChange={(e)=>setPrompt(e.target.value)}
        placeholder="Décris le site que tu veux..."
        rows={8}
        style={{width:"100%"}}
      />

      <button onClick={generateSite}>
        Générer
      </button>

      <iframe
        srcDoc={html}
        style={{
          width:"100%",
          height:"800px",
          marginTop:"20px"
        }}
      />
    </main>
  );
}
