import hljs from "highlight.js";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";

export const marked = new Marked(
  markedHighlight({
    highlight(code, lang, info) {
      const [languageName] = lang.split(":");
      const language = hljs.getLanguage(languageName)
        ? languageName
        : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  }),
);

marked.use({
  extensions: [
    {
      name: "code",
      renderer(token) {
        const { text, lang } = token;
        const [languageName, filename] = lang.split(":");
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        return `<div>${filename ? `<div class="filename">${filename}</div>` : ""}<pre><code class="${languageName}">${text}</code></pre></div>`;
      },
    },
  ],
});
