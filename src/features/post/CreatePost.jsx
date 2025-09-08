import React from "react";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";

export default function CreatePostModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* modal card */}
      <div className="relative z-10 w-full max-w-2xl rounded-2xl border border-[var(--tt-border-color)] bg-[var(--tt-card-bg-color)] shadow-xl">
        <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--tt-border-color)]">
          <h2 className="text-sm font-medium">Create post</h2>
          <button
            className="simple-editor-btn"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="p-4">
          {/**Change this form to use Query mutate for creating a post */}
          <form>
            <label>Title:</label>
            <input type="text" className="w-full mb-4 p-2 border border-gray-300 rounded" placeholder="Post Title" />
          </form>
          {/** SimpleEditor with onSubmitted to close the modal after successful submit */}
          <SimpleEditor
            submitLabel="Post"
            onSubmit={async (html) => {
              // call your API here
              await fetch("/api/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ bodyHtml: html }),
              });
            }}
            onSubmitted={onClose}   // <-- close after successful submit
          />
        </div>
      </div>
    </div>
  );
}