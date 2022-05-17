export function formattingText(text) {
  return text.split("\n").map(v => v.trim()).join("<br>");
};

export default { formattingText };
