* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #100b12;
  color: white;
  font-family: Arial, sans-serif;
}

.app {
  max-width: 480px;
  min-height: 100vh;
  margin: auto;
  padding: 22px 18px;
  background:
    radial-gradient(ellipse at 50% 20%, #42172f 0%, transparent 55%),
    #100b12;
}

header {
  text-align: center;
  padding: 15px 0 28px;
}

.brand {
  font-size: 27px;
  font-weight: 900;
  letter-spacing: 2px;
}

.brand span {
  color: #f278b5;
}

.subtitle {
  color: #c58aa9;
  font-size: 10px;
  letter-spacing: 3px;
  margin-top: 8px;
}

.welcome {
  margin-bottom: 20px;
}

.welcome p, .hint {
  color: #b99aaa;
  font-size: 13px;
}

.welcome h2 {
  margin-top: 5px;
}

.connection {
  text-align: center;
  padding: 25px 12px;
  border: 1px solid #75405e;
  border-radius: 24px;
  background: #1c121d;
  box-shadow: 0 0 25px #ed58a322;
}

.flower {
  font-size: 38px;
}

.status {
  color: #f28bbb;
  margin: 12px;
  font-weight: bold;
}

.power {
  width: 115px;
  height: 115px;
  margin: 10px auto;
  display: grid;
  place-items: center;
  border: 3px solid #f278b5;
  border-radius: 50%;
  color: #ff8fc7;
  font-size: 55px;
  box-shadow: 0 0 25px #f278b566;
}

.panel {
  margin-top: 20px;
  padding: 18px;
  background: #211722;
  border: 1px solid #563047;
  border-radius: 17px;
}

.panel h3 {
  margin-top: 0;
  color: #f29bc2;
}

.info {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 12px 0;
  border-bottom: 1px solid #44303e;
  font-size: 12px;
}

.info span {
  color: #b99aaa;
}

.info strong {
  text-align: right;
  overflow-wrap: anywhere;
}

.key-card, .subscription {
  padding: 15px;
  background: #2b1b2a;
  border-radius: 13px;
}

.key-card p, .subscription p {
  color: #b99aaa;
  font-size: 12px;
}

button {
  font: inherit;
}

.key-card button {
  width: 100%;
  padding: 13px;
  margin-top: 10px;
  border: 0;
  border-radius: 11px;
  background: #e76ca8;
  color: white;
  font-weight: bold;
}

.server-list {
  display: grid;
  gap: 9px;
}

.server-option {
  padding: 14px;
  text-align: left;
  border: 1px solid #563047;
  border-radius: 12px;
  background: #2b1b2a;
  color: white;
}

.server-option.selected {
  border-color: #f278b5;
  background: #432039;
}

.server-option span {
  float: right;
  color: #f278b5;
  font-size: 11px;
}

footer {
  text-align: center;
  color: #79566e;
  font-size: 10px;
  padding: 30px 0 12px;
}
