const formatTime = minutes => {
  const realMinutes = minutes % 60;
  const hours = Math.floor(minutes / 60);
  const realHours = hours % 24;
  const days = Math.floor(hours / 24);
  return `${days} day(s) ${realHours} hour(s) ${realMinutes} minute(s)`;
}
formatTime (120);
formatTime (59);
formatTime (3601);