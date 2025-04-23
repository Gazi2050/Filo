'use client'
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import "./styles.css";

const Editor = () => {
  const editor = useCreateBlockNote({
    domAttributes: {
      editor: {
        class: "block"
      }
    },
  });
  return (
    <div className="w-full md:w-[70%] mx-auto mt-20">
      <BlockNoteView editor={editor} data-theming-css-demo />
    </div>
  );
};

export default Editor;
