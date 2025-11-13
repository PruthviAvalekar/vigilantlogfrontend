// src/pages/Dashboard.jsx
import React, { useEffect } from "react";
import MetricCard from "../components/MetricCard";
import IndicatorsList from "../components/IndicatorsList";
import "../styles/dashboard.css";
import axios from "axios";

// Import local JSON result files
import appCrashData from "../results/app_crash_result.json";
import bsodData from "../results/bsod_result.json";
import unexpectedData from "../results/unexpected_result.json";
import hangData from "../results/hang_result.json";

export default function Dashboard() {
  const appEntry = Array.isArray(appCrashData) ? appCrashData[0] : appCrashData;
  const bsodEntry = bsodData;
  // let bsodEntry;
  // let appEntry;
  // let unexpectedEntry;
  // let hangEntry;
  const unexpectedEntry = unexpectedData;
  const hangEntry = Array.isArray(hangData) ? hangData[0] : hangData;

  useEffect(() => {
    const getData = async () => {
      try {
        const deviceName = sessionStorage.getItem("deviceName");
        const bsodData = await axios.post(
          "https://vigilant-log-cyberx.onrender.com/api/prediction/bsod",
          { deviceName: deviceName }
        );

        console.log(bsodData);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <div className="dashboard-root">
      <aside className="sidebar">
        <div className="sidebar-brand">VigilantLog</div>
        <nav className="sidebar-nav">
          <a className="nav-item active" href="/dashboard">
            Dashboard
          </a>
          <a className="nav-item" href="/system-health">
            System Health
          </a>
          <a className="nav-item" href="/analysis">
            Analysis
          </a>
        </nav>
      </aside>

      <main className="main">
        <header className="topbar">
          <h2>Dashboard</h2>
          <div className="user">System Prediction Overview</div>
        </header>

        {/* --- PREDICTION CARDS --- */}
        <section className="results-grid">
          <MetricCard
            title="App Crash"
            main={appEntry?.prediction}
            sub={`No Crash: ${appEntry?.confidence?.no_crash} | App Crash: ${appEntry?.confidence?.app_crash}`}
            color={
              appEntry?.prediction?.includes("Crash") ? "#ef4444" : "#0ea5a4"
            }
            confidences={appEntry?.confidence}
          />

          <MetricCard
            title="BSOD"
            main={bsodEntry?.prediction}
            sub={`No BSOD: ${bsodEntry?.confidence?.no_bsod} | BSOD: ${bsodEntry?.confidence?.bsod}`}
            color={
              bsodEntry?.prediction?.includes("BSOD") ? "#ef4444" : "#2563eb"
            }
            confidences={bsodEntry?.confidence}
          />

          <MetricCard
            title="Unexpected Shutdown"
            main={unexpectedEntry?.prediction}
            sub={`Nominal: ${unexpectedEntry?.confidence?.nominal_operation} | Shutdown: ${unexpectedEntry?.confidence?.unexpected_shutdown}`}
            color={
              unexpectedEntry?.prediction?.includes("Shutdown")
                ? "#ef4444"
                : "#0ea5a4"
            }
            confidences={unexpectedEntry?.confidence}
          />

          <MetricCard
            title="System Hang"
            main={hangEntry?.prediction}
            sub={`Nominal: ${hangEntry?.confidence?.nominal_operation} | Hang Risk: ${hangEntry?.confidence?.system_hang_risk}`}
            color={
              hangEntry?.prediction?.includes("Hang") ? "#ef4444" : "#f59e0b"
            }
            confidences={hangEntry?.confidence}
          />
        </section>

        {/* --- ANALYSIS PANELS --- */}
        <section className="panels">
          <div className="panel">
            <h4>BSOD Analysis</h4>
            <p>{bsodEntry?.analysis?.summary}</p>
            <IndicatorsList indicators={bsodEntry?.analysis?.indicators} />
          </div>

          <div className="panel">
            <h4>App Crash Analysis</h4>
            <p>{appEntry?.analysis?.summary}</p>
            <IndicatorsList indicators={appEntry?.analysis?.indicators} />
          </div>

          <div className="panel">
            <h4>Unexpected Shutdown Analysis</h4>
            <p>{unexpectedEntry?.analysis?.summary}</p>
            <IndicatorsList
              indicators={unexpectedEntry?.analysis?.indicators}
            />
          </div>

          <div className="panel">
            <h4>System Hang Analysis</h4>
            <p>{hangEntry?.analysis?.summary}</p>
            <IndicatorsList indicators={hangEntry?.analysis?.indicators} />
          </div>
        </section>
      </main>
    </div>
  );
}
