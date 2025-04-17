'use client'
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";

const Page = () => {
  const editor = useCreateBlockNote();
  return <BlockNoteView editor={editor} />;
};

export default Page;