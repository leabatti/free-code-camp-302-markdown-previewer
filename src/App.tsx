import { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";

// defaultMarkdown contains valid markdown that represents at least one of each of the following elements: a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

const defaultMarkdown = `
# Title

## Subtitle

Link to the webpage [link](https://www.firstweb.com).

Here is some \`inline code\`.

\`\`\`
This is a code block.
\`\`\`

- Item 1
- Item 2
- Item 3

> This is a blockquote.

![Alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/208px-Markdown-mark.svg.png)

**Bolded text**
`;

function App() {
  const [markDownText, setMarkDownText] = useState<string>(defaultMarkdown);

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Markdown Previewer</h1>
        <div className="boxes-container">
          <textarea
            title="Set Markdown Text"
            placeholder="Write Markdown Text To Preview"
            name="editor"
            id="editor"
            value={markDownText}
            onChange={(e) => setMarkDownText(e.target.value)}
          ></textarea>
          <div id="preview">
            <ReactMarkdown>{markDownText}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
