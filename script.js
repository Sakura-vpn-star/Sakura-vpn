
const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();
  tg.expand();

  const user = tg.initDataUnsafe?.user;

  if (user) {
    document.getElementById("username").textContent =
      user.first_name || "Sakura User";
  }
}

const power = document.getElementById("power");
const status = document.getElementById("status");

power.addEventListener("click", () => {
  if (tg?.showAlert) {
    tg.showAlert(
      "Это демонстрационный интерфейс. VPN пока не подключён."
    );
  } else {
    alert("Демонстрационный режим: VPN пока не подключён.");
  }
});

document.getElementById("keyButton").addEventListener("click", () => {
  if (tg?.showAlert) {
    tg.showAlert("Выдача VPN-ключей появится после настройки сервера.");
  } else {
    alert("Выдача VPN-ключей пока не настроена.");
  }
});
