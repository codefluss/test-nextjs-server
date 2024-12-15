"use client";

import { useEffect, useState } from 'react';

export default function ClientInfo() {
  const [clientInfo, setClientInfo] = useState({
    currentDate: '',
    language: '',
    screenResolution: '',
    ipAddress: '',
  });

  useEffect(() => {
    const navigator = window.navigator;
    const currentDate = new Date().toLocaleString();
    const language = navigator.language;
    const screenResolution = `${window.screen.width}x${window.screen.height}`;

    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        setClientInfo({ currentDate, language, screenResolution, ipAddress: data.ip });
      });
  }, []);

  return (
    <div>
        <h3 className="text-2xl font-bold">Info Client Side: </h3>
        <ul>
        <li>Current Date and Time: {clientInfo.currentDate}</li>
        <li>Browser Language: {clientInfo.language}</li>
        <li>Screen Resolution: {clientInfo.screenResolution}</li>
        <li>Running on: Client Side</li>
        <li>Client IP Address: {clientInfo.ipAddress}</li>
      </ul>
    </div>
  );
}
