var _a;
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// For GitHub Pages, set base to '/<repo-name>/'. Override with VITE_BASE if needed.
export default defineConfig({
    plugins: [react()],
    base: (_a = process.env.VITE_BASE) !== null && _a !== void 0 ? _a : '/dreamhelpers-ops/',
});
