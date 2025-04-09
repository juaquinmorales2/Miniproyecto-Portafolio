let tooltip;

function showTooltip(event) {
  const img = event.target;
  tooltip = document.createElement("div");
  tooltip.innerText = img.alt;

  Object.assign(tooltip.style, {
    position: "absolute",
    background: "black",
    color: "white",
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "12px",
    pointerEvents: "none",
    zIndex: "9999",
    top: event.pageY + 10 + "px",
    left: event.pageX + 10 + "px",
  });

  document.body.appendChild(tooltip);
}

function moveTooltip(event) {
  if (tooltip) {
    tooltip.style.top = event.pageY + 10 + "px";
    tooltip.style.left = event.pageX + 10 + "px";
  }
}

function hideTooltip() {
  if (tooltip) {
    tooltip.remove();
    tooltip = null;
  }
}