# Testable Profile Card — Frontend Wizards Stage 0

Files:
- index.html
- styles.css
- script.js

## Run locally
1. Save the files in a folder (index.html, styles.css, script.js).
2. Open index.html in your browser (double-click the file or serve with any static server).
   - Optional: `npx http-server` or `python -m http.server` from the folder and open http://localhost:8080

## Deploy to GitHub Pages
1. Create a new repository and push these files.
2. In repo settings → Pages, pick the `main` branch and `/ (root)` and save.
3. Visit the provided `https://<your-username>.github.io/<repo>/` URL.

## Deploy to Netlify
1. Drag & drop the project folder into Netlify (Sites → New site from Git → drag-drop).
2. Or connect your GitHub repo and let Netlify build/deploy.

## Notes for automated tests
- All required `data-testid` attributes are present:
  - `test-profile-card`, `test-user-name`, `test-user-bio`, `test-user-time`, `test-user-avatar`,
    `test-user-social-links`, `test-user-social-twitter`, `test-user-social-github`, `test-user-social-linkedin`,
    `test-user-hobbies`, `test-user-dislikes`.
- `test-user-time` displays `Date.now()` in milliseconds and updates frequently (within 1s).
- Avatar accepts either URL input or file upload; result is displayed on the `img` with `data-testid="test-user-avatar"`.
- Social links open in a new tab with `rel="noopener noreferrer"` for security.
