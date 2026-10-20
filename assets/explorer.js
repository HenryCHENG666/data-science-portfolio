"use strict";
const effects = {"Control": {"TF_A": 0.0021, "TF_B": 0.0089, "Growth": -0.0004, "Stress": 0.0017}, "A_0.25": {"TF_A": -0.414, "TF_B": -0.1554, "Growth": -0.056, "Stress": 0.1545}, "A_0.5": {"TF_A": -1.0036, "TF_B": -0.5179, "Growth": -0.214, "Stress": 0.4782}, "A_0.75": {"TF_A": -1.9987, "TF_B": -1.4016, "Growth": -0.8287, "Stress": 1.1997}, "B_0.25": {"TF_A": 0.0014, "TF_B": -0.4113, "Growth": -0.1592, "Stress": 0.3741}, "B_0.5": {"TF_A": -0.0055, "TF_B": -0.997, "Growth": -0.4897, "Stress": 0.9096}, "B_0.75": {"TF_A": -0.0055, "TF_B": -1.9958, "Growth": -1.3821, "Stress": 1.5547}};
const colors = ["#0e938b", "#5865c8", "#f59e42", "#df637e"];
const select = document.getElementById("condition");
function renderEffects() {
  const box = document.getElementById("effect-bars");
  box.replaceChildren();
  Object.entries(effects[select.value]).forEach(([gene, value], i) => {
    const row = document.createElement("div"); row.className = "effect-row";
    const name = document.createElement("span"); name.textContent = gene;
    const track = document.createElement("span"); track.className = "effect-track";
    const bar = document.createElement("span"); bar.className = "effect-fill";
    bar.style.background = colors[i]; bar.style.width = `${Math.abs(value) / 2.1 * 50}%`;
    bar.style.left = value >= 0 ? "50%" : `${50 - Math.abs(value) / 2.1 * 50}%`;
    track.append(bar);
    const num = document.createElement("strong"); num.textContent = `${value >= 0 ? "+" : ""}${value.toFixed(2)}`;
    row.append(name, track, num); box.append(row);
  });
}
select.addEventListener("change", renderEffects); renderEffects();
