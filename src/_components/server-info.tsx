import os from 'os';

export default function ServerInfo() {
  const isClientSide = typeof window !== 'undefined';
  const currentDate = new Date().toLocaleString();
  const ipAddress = os.networkInterfaces()['eth0']?.[0]?.address || 'IP not available';

  return (
    <div>
        <h3 className="text-2xl font-bold">Info Server Side: </h3>
        <ul>
            <li>Current Date and Time: {currentDate}</li>
            <li>Running on: {isClientSide ? 'Client Side' : 'Server Side'}</li>
            <li>Server IP Address: {ipAddress}</li>
        </ul>
    </div>
  );
}
