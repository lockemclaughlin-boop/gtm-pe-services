/*
 * Chatbot loader — used by BOTH pages (index.html and services.html).
 *
 * SET THIS ONE VALUE after the Chatling bot is built and published:
 *   Chatling -> your chatbot -> Deploy -> Website Widget -> copy the chatbot id
 *   (the long id in the embed snippet, e.g. data-id="abc123...").
 *
 * IMPORTANT: compare with the exact snippet Chatling shows on its Website Widget
 * page. If it differs from the loader below (script URL / config name), copy
 * Chatling's snippet's values here instead.
 */
const CHATLING_ID = ""; // <-- paste chatbot id here, e.g. "1234567890"

(function () {
  if (CHATLING_ID) {
    window.chtlConfig = { chatbotId: CHATLING_ID };
    const s = document.createElement("script");
    s.async = true;
    s.id = "chtl-script";
    s.type = "text/javascript";
    s.src = "https://chatling.ai/js/embed.js";
    s.setAttribute("data-id", CHATLING_ID);
    document.body.appendChild(s);
  } else {
    // Visible placeholder until the real widget id is configured.
    const pill = document.createElement("div");
    pill.className = "chat-pill";
    pill.textContent = "Chatbot not connected yet";
    document.body.appendChild(pill);
  }
})();
