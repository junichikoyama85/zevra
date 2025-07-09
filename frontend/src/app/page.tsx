'use client';
import { useState, useEffect } from 'react';
import { useMswReady } from '../../hooks/useMswReady';

export default function Home() {
  const [users, setUsers] = useState<any[]>([]);
  const isMswReady = useMswReady();

  useEffect(() => {
    if (!isMswReady) return; // MSWの準備ができるまで待機

    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, [isMswReady]);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
