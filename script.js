const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();
  tg.expand();

  const user = tg.initDataUnsafe?.user;

  if (user) {
    const name = user.first_name || "Sakura User";

    document.getElementById("username").textContent = name;
    document.getElementById("profileName").textContent = name;
    document.getElementById("profileId").textContent =
      user.id ? String(user.id) : "Недоступен";
  }
}

function showMessage(message) {
  if (tg?.showAlert) {
    tg.showAlert(message);
  } else {
    alert(message);
  }
}

document.getElementById("keyButton").addEventListener("click", () => {
  showMessage("🌸 У тебя пока нет выданных VPN-ключей. Этот раздел заработает после подключения серверной части.");
});

const serverButtons = document.querySelectorAll(".server-option");

serverButtons.forEach(button => {
  button.addEventListener("click", () => {
    serverButtons.forEach(item => {
      item.classList.remove("selected");
      const label = item.querySelector("span");
      if (label) label.remove();
    });

    button.classList.add("selected");

    const label = document.createElement("span");
    label.textContent = "Выбран";
    button.appendChild(label);

    document.getElementById("selectedServer").textContent =
      "Выбран: " + button.dataset.server;

    showMessage("Выбран сервер: " + button.dataset.server +
      ". Реальное подключение пока не настроено.");
  });
});

