import { processCommand } from "../engine/task-planner.js";
import manifest from "./master-manifest.js";

export function interpret(input) {
  let text = input.toLowerCase();

  // multilingual normalization examples
  const map = {
    "बनव": "create",
    "तयार कर": "create",
    "जोड": "add",
    "काढून टाक": "remove",
    "बदल": "update",
    "सिस्टम": "system",
    "विश्व": "universe",
    "तारा": "stars",
    "ग्रह": "planets",
    "आकाशगंगा": "galaxy"
  };

  for (const key in map) {
    if (text.includes(key)) {
      text = text.replace(key, map[key]);
    }
  }

  // Auto command detection
  const actionResult = processCommand(text);

  return {
    status: "executed",
    original: input,
    normalized: text,
    action: actionResult
  };
}
