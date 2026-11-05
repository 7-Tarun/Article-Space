# Security Review

## Finding

| Severity | File | Lines | Finding | Confidence |
|---|---|---:|---|---:|
| HIGH | `src/pages/Post.jsx` | 62 | Stored cross-site scripting (XSS): database-backed post content is passed to `html-react-parser` without sanitization. Script-capable markup may execute when a visitor views a post. | 8/10 |

### Recommendation

Sanitize post content with a strict HTML allowlist before rendering, excluding script-capable elements and attributes.

## Logic review

No separate logic defect was substantiated during this review.
