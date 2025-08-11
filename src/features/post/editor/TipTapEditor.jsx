import React, { useCallback } from 'react';
import { useEditor, useEditorState, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { TextStyle } from '@tiptap/extension-text-style';
import Placeholder from '@tiptap/extension-placeholder';

const extensions = [
  TextStyle,
  StarterKit,
  Placeholder.configure({ placeholder: "What's on your mind?" }),
];

/* ---------- Toolbar ---------- */
function MenuBar({ editor }) {
  const s = useEditorState({
    editor,
    selector: (ctx) => ({
      isBold: ctx?.editor?.isActive('bold') ?? false,
      isItalic: ctx?.editor?.isActive('italic') ?? false,
      isStrike: ctx?.editor?.isActive('strike') ?? false,
      isCode: ctx?.editor?.isActive('code') ?? false,
      isParagraph: ctx?.editor?.isActive('paragraph') ?? false,
      isH1: ctx?.editor?.isActive('heading', { level: 1 }) ?? false,
      isH2: ctx?.editor?.isActive('heading', { level: 2 }) ?? false,
      isH3: ctx?.editor?.isActive('heading', { level: 3 }) ?? false,
      isBullet: ctx?.editor?.isActive('bulletList') ?? false,
      isOrdered: ctx?.editor?.isActive('orderedList') ?? false,
      isBlockquote: ctx?.editor?.isActive('blockquote') ?? false,
      canBold: ctx?.editor?.can()?.chain()?.toggleBold()?.run() ?? false,
      canItalic: ctx?.editor?.can()?.chain()?.toggleItalic()?.run() ?? false,
      canStrike: ctx?.editor?.can()?.chain()?.toggleStrike()?.run() ?? false,
      canCode: ctx?.editor?.can()?.chain()?.toggleCode()?.run() ?? false,
      canUndo: ctx?.editor?.can()?.chain()?.undo()?.run() ?? false,
      canRedo: ctx?.editor?.can()?.chain()?.redo()?.run() ?? false,
    }),
  });

  if (!editor) return null;

  const base =
    'px-2 py-1 text-sm rounded whitespace-nowrap ' +
    'hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500';
  const active = 'bg-gray-200 dark:bg-gray-700';
  const disabled = 'opacity-50 cursor-not-allowed';

  const btn = useCallback(
    ({ onClick, isActive = false, isDisabled = false, label, title }) => (
      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}   // keep selection
        onClick={onClick}
        disabled={isDisabled}
        aria-pressed={isActive}
        title={title ?? label}
        className={[base, isActive ? active : '', isDisabled ? disabled : ''].join(' ')}
      >
        {label}
      </button>
    ),
    []
  );

  const Sep = () => <span className="mx-2 h-4 w-px bg-gray-300 dark:bg-gray-600" />;

  return (
    <div className="w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 rounded-t-md">
      <div className="flex items-center gap-1 overflow-x-auto">
        {btn({ label: 'Bold',   isActive: s.isBold,   isDisabled: !s.canBold,   onClick: () => editor.chain().focus().toggleBold().run(),   title: 'Bold (Ctrl+B)' })}
        {btn({ label: 'Italic', isActive: s.isItalic, isDisabled: !s.canItalic, onClick: () => editor.chain().focus().toggleItalic().run(), title: 'Italic (Ctrl+I)' })}
        {btn({ label: 'Strike', isActive: s.isStrike, isDisabled: !s.canStrike, onClick: () => editor.chain().focus().toggleStrike().run() })}
        {btn({ label: 'Code',   isActive: s.isCode,   isDisabled: !s.canCode,   onClick: () => editor.chain().focus().toggleCode().run() })}

        <Sep />

        {btn({ label: 'P',  isActive: s.isParagraph, onClick: () => editor.chain().focus().setParagraph().run(), title: 'Paragraph' })}
        {btn({ label: 'H1', isActive: s.isH1,        onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run() })}
        {btn({ label: 'H2', isActive: s.isH2,        onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run() })}
        {btn({ label: 'H3', isActive: s.isH3,        onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run() })}

        <Sep />

        {btn({ label: '• List', isActive: s.isBullet,  onClick: () => editor.chain().focus().toggleBulletList().run() })}
        {btn({ label: '1. List', isActive: s.isOrdered, onClick: () => editor.chain().focus().toggleOrderedList().run() })}
        {btn({ label: 'Quote',  isActive: s.isBlockquote, onClick: () => editor.chain().focus().toggleBlockquote().run() })}

        <Sep />

        {btn({ label: 'Clear marks', onClick: () => editor.chain().focus().unsetAllMarks().run() })}
        {btn({ label: 'Clear nodes', onClick: () => editor.chain().focus().clearNodes().run() })}
        {btn({ label: 'Undo', isDisabled: !s.canUndo, onClick: () => editor.chain().focus().undo().run(), title: 'Undo (Ctrl+Z)' })}
        {btn({ label: 'Redo', isDisabled: !s.canRedo, onClick: () => editor.chain().focus().redo().run(), title: 'Redo (Ctrl+Y)' })}
      </div>
    </div>
  );
}

/* ---------- Editor ---------- */
export default function TiptapEditor({
  value,
  onChange = () => {},
  minHeight = '10rem',   // tweak height easily
  readOnly = false,
}) {
  const editor = useEditor({
    extensions,
    editable: !readOnly,
    content:
      value ??
      `<h2>Hi there,</h2>
       <p>This is a <em>basic</em> TipTap editor with Tailwind styling.</p>
       <ul><li>Bullet item</li><li>Another item</li></ul>`,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    onCreate: ({ editor }) => {
      if (value && value !== editor.getHTML()) editor.commands.setContent(value, false);
    },
    editorProps: {
      attributes: {
        // full-width, minimal base; if you use Typography, you can swap for 'prose dark:prose-invert max-w-none'
        class: 'ProseMirror w-full focus:outline-none',
      },
    },
  });

  if (!editor) return null;

  return (
    <div className="w-full rounded-md border border-gray-200 dark:border-gray-700 overflow-hidden">
      {!readOnly && <MenuBar editor={editor} />}

      <div
        className="w-full bg-white dark:bg-gray-900 px-4 py-3"
        style={{ minHeight }}
      >
        <EditorContent editor={editor} className="w-full" />
      </div>
    </div>
  );
}