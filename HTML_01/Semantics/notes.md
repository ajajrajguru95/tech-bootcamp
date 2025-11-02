# 🚀 Advanced HTML: Semantic Structure & Accessibility

## 📁 Folder Contents

- **start.html** — The original "div soup" code we began with.
- **final.html** — The refactored, semantic, and accessible version.
- **task.html** — A blog post example for you to refactor as a challenge.
- **notes.md** — These notes.

---

## 🧠 Key Concepts & What We Learned

In this session, we moved beyond basic HTML syntax to understand how to write meaningful, professional-grade code.

---

### ❌ The Problem with "Div Soup"

The old way of using `<div>` and `<span>` for everything creates a website that might look right but has no structural meaning. This is bad for:

- **Search Engine Optimization (SEO):** Search engines rely on semantic clues to understand your content.
- **Accessibility (A11y):** Screen readers and other assistive technologies can't navigate the page effectively.
- **Maintainability:** It's harder for developers (including future you!) to read and understand the code.

---

### ✅ The Solution: Semantic HTML

Semantic HTML uses tags that describe their meaning to both the browser and the developer.

**Tags are your friends:**  
`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<figure>`, `<figcaption>`, `<time>`

- They provide built-in accessibility: Using `<nav>` automatically gives the element a `role="navigation"` for screen readers.

---

### 🦾 Enhancing with ARIA

Sometimes HTML doesn't have a tag for exactly what we need. This is where ARIA (Accessible Rich Internet Applications) attributes come in.

- **`aria-label`:** Provides an invisible label for an element.
- **`aria-current="page"`:** Specifies which item in a set represents the current page.

> **Rule of Thumb:** Prefer native HTML elements and attributes over ARIA!

---

### 🕵️‍♂️ The Power of the Accessibility Inspector

The most important tool we used today was the Accessibility Tab in the browser's Developer Tools.

- **How to find it:** In Chrome, Inspect an element, look for the `>>` tab menu, and select "Accessibility".
- **What it shows:** The "Computed Properties" section tells you the final Role, Name, and State that a screen reader will use.

---

## 📚 Essential Resources & Links

- [MDN Web Docs: HTML Elements Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)  
    The bible for web developers. Bookmark this.

- [MDN Web Docs: ARIA Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)  
    A complete list of what `role=` attributes do.

- [WebAIM: Accessibility Checklist](https://webaim.org/standards/wcag/checklist)  
    A practical, easy-to-follow guide for ensuring your sites are accessible.

- [Chrome DevTools: Accessibility Reference](https://developer.chrome.com/docs/devtools/accessibility/reference/)  
    How to use the tools we saw in class.

---

## 🛠️ Hands-On Task & Instructions

### Compare the Examples

1. Open **start.html** and **final.html** in your browser. They will look identical.
2. Open the Developer Tools (`F12`) on both files.
3. Use the Accessibility Inspector to click on the elements in the navigation.
4. See the dramatic difference in the "Computed Properties" between the two files.  
     _This is the core lesson!_

### Your Challenge

- Open **task.html**.  
- Refactor the "div soup" blog post into semantic HTML.

**Hints:**  
Think about using `<article>`, `<header>`, `<time datetime="YYYY-MM-DD">`, `<figure>`, and `<figcaption>`.

**Bonus:**  
After you're done, run the Accessibility Inspector on your new elements to see the positive impact you've made!

---

## 💡 Key Takeaway

Writing good HTML isn't just about making the browser display what you want.  
It's about providing a robust, meaningful structure that works for everyone and everything: users, developers, search engines, and assistive technologies.