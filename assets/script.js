const btn = document.getElementById("copyBib");
if (btn) {
  btn.addEventListener("click", async () => {
    const text = document.getElementById("bibtexText").innerText;
    try {
      await navigator.clipboard.writeText(text);
      btn.textContent = "Copied";
      setTimeout(() => btn.textContent = "Copy", 1500);
    } catch {
      btn.textContent = "Select text";
    }
  });
}
