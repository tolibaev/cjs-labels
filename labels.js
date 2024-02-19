import { v4 as uuidv4 } from "uuid";

export function labelsCheck(labels, inputs) {
  const labels = document.querySelectorAll(labels),
    inputs = document.querySelectorAll(inputs);
  labels.forEach((label, index) => {
    const id = uuidv4();
    label.setAttribute("for", id);
    inputs[index].id = id;
  });
  labels.forEach((label) => {
    label.onkeydown = (event) => {
      if (event.code === "Space" || event.code === "Enter") {
        document.getElementById(label.getA).click();
      }
    };
  });
}
