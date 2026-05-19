const fs = require('fs');
const path = require('path');

const replacements = [
  { from: /text-white/g, to: 'text-slate-900' },
  { from: /text-slate-400/g, to: 'text-slate-600' },
  { from: /text-slate-300/g, to: 'text-slate-700' },
  { from: /text-slate-500/g, to: 'text-slate-500' },
  { from: /bg-slate-900\/80/g, to: 'bg-white/80' },
  { from: /bg-slate-900\/50/g, to: 'bg-white/50' },
  { from: /bg-slate-900\/40/g, to: 'bg-white/40' },
  { from: /bg-slate-900/g, to: 'bg-white' },
  { from: /bg-slate-950\/50/g, to: 'bg-slate-50/50' },
  { from: /border-white\/5/g, to: 'border-slate-200' },
  { from: /border-white\/10/g, to: 'border-slate-300' },
  { from: /bg-white\/5/g, to: 'bg-slate-900/5' },
  { from: /bg-white\/10/g, to: 'bg-slate-900/5' },
  { from: /border-slate-700\/50/g, to: 'border-slate-200' },
  { from: /bg-slate-800/g, to: 'bg-slate-200' },
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Skip App.jsx because we already updated it
      if (fullPath.endsWith('App.jsx')) continue;
      
      let newContent = content;
      for (const {from, to} of replacements) {
        newContent = newContent.replace(from, to);
      }

      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
      }
    }
  }
}

processDir(path.join(__dirname, 'src'));
console.log('Done replacing colors in components.');
