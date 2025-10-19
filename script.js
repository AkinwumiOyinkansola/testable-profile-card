document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.getElementById("user-time");

  const updateTime = () => {
    const now = Date.now();
    timeElement.textContent = `${now} (${new Date().toLocaleTimeString()})`;
  };

  updateTime();
  setInterval(updateTime, 1000);
});
