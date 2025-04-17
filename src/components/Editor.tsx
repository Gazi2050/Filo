'use client'
import { useRef, useState } from "react";

// Define an array of styles for different elements
const elementStyles = [
  {
    tag: "code", // For inline code
    regex: /`([^`]+)`/g, // Detect text wrapped in backticks
    className: "text-white bg-gray-700 font-mono p-1 rounded",
  },
  {
    tag: "h1", // For <h1> heading
    regex: /^# (.*)/gm, // Detect text starting with a single # for h1
    className: "text-4xl font-semibold mb-4",
  },
  {
    tag: "h2", // For <h2> heading
    regex: /^## (.*)/gm, // Detect text starting with ## for h2
    className: "text-3xl font-semibold mb-4",
  },
  {
    tag: "p", // For normal paragraphs
    regex: /^(?!#|`)(.*)$/gm, // Everything else
    className: "text-lg leading-relaxed mb-4",
  },
];

const Editor = () => {
  const [blocks, setBlocks] = useState([{ id: Date.now(), html: "" }]);
  const blockRefs = useRef({});

  const handleKeyDown = (e, id) => {
    const index = blocks.findIndex((b) => b.id === id);

    if (e.key === "Enter") {
      e.preventDefault();
      const newBlock = { id: Date.now(), html: "" };
      const updated = [...blocks];
      updated.splice(index + 1, 0, newBlock);
      setBlocks(updated);

      // Delay focus on new block
      setTimeout(() => {
        blockRefs.current[newBlock.id]?.focus();
      }, 0);
    }

    if (e.key === "Backspace" && blocks[index].html === "") {
      e.preventDefault();
      if (blocks.length === 1) return;
      const updated = [...blocks];
      updated.splice(index, 1);
      setBlocks(updated);

      const prev = blocks[index - 1];
      if (prev) {
        setTimeout(() => {
          blockRefs.current[prev.id]?.focus();
        }, 0);
      }
    }
  };

  // Function to apply styles based on regex matching
  const handleInput = (e, id) => {
    let text = e.target.innerText;

    // Loop through each style and apply the matching regex
    elementStyles.forEach(({ tag, regex, className }) => {
      text = text.replace(regex, (match, p1) => {
        // Wrap matched content with appropriate HTML and style class
        return `<span class="${className}">${p1}</span>`;
      });
    });

    const updated = blocks.map((b) =>
      b.id === id ? { ...b, html: text } : b
    );
    setBlocks(updated);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-black flex flex-col items-center py-20 px-4">
      <div className="max-w-2xl w-full">
        {blocks.map((block) => (
          <div
            key={block.id}
            ref={(el) => (blockRefs.current[block.id] = el)}
            contentEditable
            suppressContentEditableWarning
            onInput={(e) => handleInput(e, block.id)}
            onKeyDown={(e) => handleKeyDown(e, block.id)}
            className="outline-none py-2 text-lg focus:bg-yellow-50 focus:rounded-md px-1 transition"
            data-placeholder="Type something..."
            dir="ltr"
            dangerouslySetInnerHTML={{ __html: block.html }}
          />
        ))}
      </div>
    </div>
  );
};

export default Editor;
