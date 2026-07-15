import { useState, useEffect } from 'react';

const SCHEDULE: Record<number, { open: string; close: string }> = {
  0: { open: '07:00', close: '15:00' },
  1: { open: '07:00', close: '18:00' },
  2: { open: '07:00', close: '18:00' },
  3: { open: '07:00', close: '18:00' },
  4: { open: '07:00', close: '18:00' },
  5: { open: '07:00', close: '20:00' },
  6: { open: '07:00', close: '20:00' },
};

function isOpenNow(): boolean {
  const now = new Date();
  const day = now.getDay();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const schedule = SCHEDULE[day];
  if (!schedule) return false;

  const [openH, openM] = schedule.open.split(':').map(Number);
  const [closeH, closeM] = schedule.close.split(':').map(Number);
  const openMinutes = openH * 60 + openM;
  const closeMinutes = closeH * 60 + closeM;

  return currentMinutes >= openMinutes && currentMinutes < closeMinutes;
}

export function useIsOpenNow(): boolean {
  const [isOpen, setIsOpen] = useState(() => isOpenNow());

  useEffect(() => {
    const check = () => setIsOpen(isOpenNow());
    const now = new Date();
    const msUntilNextMinute = (60 - now.getSeconds()) * 1000;

    const timeout = setTimeout(() => {
      check();
      const interval = setInterval(check, 60000);
      return () => clearInterval(interval);
    }, msUntilNextMinute);

    return () => clearTimeout(timeout);
  }, []);

  return isOpen;
}