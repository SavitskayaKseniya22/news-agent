export function parseUnixTimeStamp(timestamp: number) {
  const dateObject = new Date(timestamp * 1000);
  return `${dateObject.toLocaleDateString()} ${dateObject.toLocaleTimeString()}`;
}

export function refineTitle(string: string) {
  return string.split(' ').map((item) => item[0].toUpperCase() + item.slice(1)).join(" ");
}
