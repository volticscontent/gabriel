const fs = require('fs');
const path = require('path');

const cloneNumber = process.argv[2];

if (!cloneNumber) {
  console.log('❌ Por favor, forneça o número do clone (1-100)');
  console.log('Exemplo: node apply-clone.js 25');
  process.exit(1);
}

const cloneNum = parseInt(cloneNumber);
if (cloneNum < 1 || cloneNum > 100) {
  console.log('❌ Número do clone deve estar entre 1 e 100');
  process.exit(1);
}

const cloneFileName = `clone-${cloneNum.toString().padStart(3, '0')}.tsx`;
const clonePath = path.join(__dirname, cloneFileName);
const targetPath = path.join(__dirname, '..', 'src', 'app', 'page.tsx');

if (!fs.existsSync(clonePath)) {
  console.log(`❌ Clone ${cloneFileName} não encontrado`);
  process.exit(1);
}

const cloneContent = fs.readFileSync(clonePath, 'utf8');
fs.writeFileSync(targetPath, cloneContent);

console.log(`✅ Clone ${cloneNum} aplicado com sucesso!`);
console.log('🚀 Execute "npm run dev" para visualizar as mudanças');
