import React from "react";

export async function copyToClipboard(event: React.MouseEvent<HTMLDivElement>) {
  const text = event.currentTarget.textContent || "";
  try {
    await navigator.clipboard.writeText(text);
    alert("Copied the text: " + text);
  } catch (err) {
    alert("Failed to copy: " + err);
  }
}