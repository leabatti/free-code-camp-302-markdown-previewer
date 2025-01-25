import { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";

// defaultMarkdown contains valid markdown that represents at least one of each of the following elements: a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

const defaultMarkdown = `
# Markdown

**From Wikipedia, the free encyclopedia**

Markdown is a lightweight markup language for creating formatted text using a plain-text editor. John Gruber created Markdown in 2004 as an easy-to-read markup language. Markdown is widely used for blogging and instant messaging, and also used elsewhere in online forums, collaborative software, documentation pages, and readme files.

The initial description of Markdown contained ambiguities and raised unanswered questions, causing implementations to both intentionally and accidentally diverge from the original version. This was addressed in 2014 when long-standing Markdown contributors released CommonMark, an unambiguous specification and test suite for Markdown.

Link to the official webpage [link](https://daringfireball.net/projects/markdown).

Link to the Wikipedia article [link](https://en.wikipedia.org/wiki/Markdown).

**Here is some \`inline code\`.**

\`\`\`
# A first-level heading
## A second-level heading
### A third-level heading
\`\`\`

## Markdown Extra

**Markdown Extra** is a lightweight markup language based on Markdown implemented in PHP (originally), Python and Ruby. It adds the following features that are not available with regular Markdown:

- Markdown markup inside HTML blocks
- Elements with id/class attribute
- "Fenced code blocks" that span multiple lines of code
- Tables
- Definition lists
- Footnotes
- Abbreviations

## Acknowledgements

> "Aaron Swartz deserves a tremendous amount of credit for his feedback on the design of Markdown's formatting syntax. Markdown is much better thanks to Aaron's ideas, feedback, and testing. Also, Aaron's html2text is a very handy (and free) utility for turning HTML into Markdown-formatted plain text.
" - John Gruber

![Markdown logo](https://www.markdownguide.org/assets/images/markdown-mark-white.svg)

Markdown logo
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
