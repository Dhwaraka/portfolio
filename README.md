# Your Portfolio Website — How to Edit

A short, practical guide. Read it once, then you'll only ever need to look at `content.js`.

---

## 1. The four things in this folder

```
portfolio/
├── index.html      ← the layout. DON'T edit this.
├── content.js      ← your text and image paths. EDIT this.
├── images/         ← drop your photos here.
└── README.md       ← this file.
```

You only ever touch **`content.js`** and the **`images/`** folder. That's it.

---

## 2. Open and preview the site

**To preview:** double-click `index.html`. It opens in your browser. That's all — no server, no setup.

**To edit text:** open `content.js` in any text editor. I recommend:
- **VS Code** (free, best option) — [code.visualstudio.com](https://code.visualstudio.com)
- Notepad++ on Windows, TextEdit on Mac, Sublime Text — all fine

After saving an edit, refresh the browser tab to see the change. That's the entire workflow.

---

## 3. Adding images to a project (with slider)

This is the big one. Let's walk through a real example.

### Step 1 — Put your photos in the images folder

Drop your photos into the `images/` folder. Use simple lowercase filenames with no spaces:

✅ Good: `dispenser-1.jpg`, `dispenser-front.jpg`, `dispenser-installed.jpg`
❌ Bad: `IMG_4523 (1).JPG`, `My Photo.png`

**Recommended:** before adding photos, shrink them with [squoosh.app](https://squoosh.app) (free, runs in browser). A 4MB phone photo can become 200KB with no visible quality loss — and your site will load 20× faster.

### Step 2 — Tell content.js about them

Open `content.js`. Find the project you want to update. Look for this block:

```javascript
{
  tag: "Project 01 / Deployed",
  // ... other stuff ...
  images: [
    // Add your dispenser photos here, e.g.:
    // "images/dispenser-1.jpg",
    // "images/dispenser-2.jpg",
    // "images/dispenser-3.jpg",
  ],
  placeholder: "dispenser",
  // ...
}
```

Change the `images: []` block to list your actual filenames:

```javascript
images: [
  "images/dispenser-1.jpg",
  "images/dispenser-2.jpg",
  "images/dispenser-3.jpg",
  "images/dispenser-4.jpg",   // ← add as many as you want
],
```

Save the file, refresh the browser. Done — the slider appears automatically with arrow buttons, dots, swipe support, and a `1 / 4` counter.

### The slider rules

| Number of images | What you see |
|---|---|
| 0 images (`images: []`) | The SVG technical illustration placeholder |
| 1 image | Just the image, no controls |
| 2+ images | Slider with arrows, dots, counter, swipe |

### Image proportions

The project boxes are **4:3** (landscape). Personal project cards are **1.4:1** (slight landscape). Images get cropped to fill the box, so landscape photos work best. Portrait photos will still display fine but will be cropped top/bottom.

---

## 4. Editing text

In `content.js`, every text field is between quotes. Just type over what's there. A few rules:

**Rule 1: Don't delete the quotes.**
```javascript
title: "High-Pressure Hydrogen Dispensing Enclosure",   ✅
title: High-Pressure Hydrogen Dispensing Enclosure,     ❌ broken
```

**Rule 2: Don't delete the comma at the end of each line.**
```javascript
title: "...",         ✅ comma here
description: "...",   ✅ comma here
```

**Rule 3: To italicize a word in accent color, wrap it in `<em>...</em>`:**
```javascript
title: "High-Pressure Hydrogen <em>Dispensing</em> Enclosure",
```
This makes "Dispensing" italic and orange. You can use this anywhere.

**Rule 4: To make a word bold (no color change), wrap it in `<strong>...</strong>`:**
```javascript
intro: "I have <strong>two years</strong> of experience.",
```

**Rule 5: Special characters use codes:**
| You want | Type |
|---|---|
| `→` (arrow) | `&rarr;` |
| `—` (em dash) | `&mdash;` |
| `&` (ampersand) | `&amp;` |
| `°` (degree) | `&deg;` |
| `×` (multiply) | `&times;` |
| `<` and `>` | `&lt;` and `&gt;` |
| Non-breaking space (keeps two words together) | `&nbsp;` |

Most regular punctuation works as normal — only these special ones need codes.

---

## 5. Common edits

### Update your phone number or email
Find the `contact:` block at the bottom of `content.js`:
```javascript
contact: {
  email: "dhwara18@gmail.com",
  phone: "(480) 796-2999",
  phoneHref: "+14807962999",   // ← keep digits-only, include country code
  // ...
}
```

### Add your real LinkedIn URL
In the same `contact:` block:
```javascript
linkedinUrl: "https://www.linkedin.com/in/your-actual-username",
portfolioUrl: "https://link-to-your-portfolio.pdf",
```

### Edit a project description
Find the project in the `projects:` list and rewrite the `description:` text. Same for `title:`, `tag:`, etc.

### Edit a project's specs (the 4 boxes under the description)
Find the `specs:` array inside that project:
```javascript
specs: [
  { label: "Tools", value: "SolidWorks sheet metal &amp; weldments" },
  { label: "Weight reduction", value: "<em>30%</em> lighter than previous" },
  // ...
],
```
The `<em>` wrapper makes the number italic and orange — use it for key metrics.

### Add a new project
Inside `projects: [ ... ]`, copy an existing project block and paste it as a new entry. Update the fields. The site auto-handles any number of projects and alternates the left/right layout.

```javascript
projects: [
  { /* existing project 1 */ },
  { /* existing project 2 */ },
  {  // ← new project, just paste here
    tag: "Project 05 / New",
    figureLabel: "FIG. 05 / NEW",
    figureLabelRight: "TBD",
    title: "Your <em>New</em> Project",
    description: "Description here.",
    images: [],
    placeholder: "dispenser",   // reuse any existing key, or just leave it
    specs: [
      { label: "Label 1", value: "Value 1" },
      { label: "Label 2", value: "Value 2" },
      { label: "Label 3", value: "Value 3" },
      { label: "Label 4", value: "Value 4" },
    ],
  },
],
```

### Remove a project
Delete that whole project block (from `{` to `},`). Done.

### Add a new skill tag
Find the right `skills:` block and add to its `tags:` list:
```javascript
tags: [
  { name: "SolidWorks", featured: true },
  { name: "Onshape" },
  { name: "Your New Skill" },   // ← just add this line
],
```
Add `featured: true` to make it stand out in dark.

---

## 6. If something breaks

The most common issue is a missing comma or quote in `content.js`. The site will go blank if there's a syntax error.

**To find the error:**
1. Open the browser's developer console: press **F12** (or Cmd+Option+I on Mac)
2. Click the **Console** tab
3. Look for a red error message — it usually tells you the exact line number

**Quick checklist when something breaks:**
- Did I delete a quote `"` ?
- Did I delete a comma `,` ?
- Did I delete a closing brace `}` or bracket `]`?
- Did I forget to wrap an `&` in `&amp;`?

If you get stuck, paste your `content.js` back into Claude and ask what's wrong.

---

## 7. Publishing the site online

Once you're happy with it, you'll want a real URL to share with recruiters. Three free options:

### Option A — Netlify Drop (easiest, 30 seconds)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your whole `portfolio/` folder onto the page
3. You get a free URL like `https://random-name.netlify.app`
4. To update later: just drag the folder in again

### Option B — Vercel
1. Sign up at [vercel.com](https://vercel.com)
2. Drag and drop your folder
3. Get a URL

### Option C — GitHub Pages (best if you know git)
Push the folder to a GitHub repo, enable Pages in the repo settings. URL becomes `yourusername.github.io/portfolio`.

For all of them: free, fast, no credit card needed for a static site this size.

### Custom domain (optional)
Want `dhwarakesh.com` or similar? Buy a domain from Namecheap (~$10/year), point it at Netlify/Vercel. Both services have one-page guides for this.

---

## 8. Quick reference card

```
WANT TO...                          GO TO...
────────────────────────────────────────────────────────────────
Change a text                       content.js, edit between "quotes"
Add photos to a project             1. Put files in images/
                                    2. Add filenames to images: [ ] list
Italicize/highlight a word          Wrap it: <em>word</em>
Bold a word (no color)              Wrap it: <strong>word</strong>
Add a new project                   Copy a project block, paste, edit
Update phone/email/LinkedIn         contact: { } block at bottom
Preview your changes                Save file → refresh browser tab
Publish online                      Drag folder to netlify.com/drop
Debug a broken site                 Press F12 → Console tab → read error
```

That's everything. Good luck with the job search.
