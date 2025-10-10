import DOMPurify from "dompurify";

const ALLOWED_TAGS = [
  'h1','h2','h3','p','b','i','u','strong','em','blockquote','code','pre',
  'ul','ol','li','br','hr','a','img','span','div'
];
const ALLOWED_ATTR = [
  'href','target','rel','title','alt','src','class'
];

export function sanitizeHtml(dirty) {
    if (!dirty) return '';
    return DOMPurify.sanitize(dirty, {
        ALLOWED_TAGS,
        ALLOWED_ATTR,
        USE_PROFILES: { html: true },
        FORBID_TAGS: ['style', 'iframe', 'script'],
        FORBID_ATTR: ['style', 'onerror', 'onload'],
    });
};