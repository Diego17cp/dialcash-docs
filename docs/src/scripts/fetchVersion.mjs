// scripts/fetch-version.mjs
import fs from 'fs';
import path from 'path';

const GITHUB_API_URL = 'https://api.github.com/repos/Diego17cp/dialcash/releases/latest';

async function fetchLatestVersion() {
    try {
        console.log('Fetching latest version from GitHub...');
        
        const response = await fetch(GITHUB_API_URL, {
            headers: {
                'User-Agent': 'Dialcash-Docs-Build-Script'
            }
        });
        
        if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
        
        const data = await response.json();
        const version = data.tag_name.replace(/^v/, '');
        
        console.log(`Latest version: ${version}`);
        console.log(`Published at: ${data.published_at}`);
        return {
            version,
            publishedAt: data.published_at
        };
        
    } catch (error) {
        console.warn('Failed to fetch version from GitHub:', error.message);
        console.log('Using fallback version...');
        return {
            version: '1.1.2',
            publishedAt: new Date().toISOString()
        };
    }
}

async function generateVersionFile() {
    const { version, publishedAt } = await fetchLatestVersion();
    const versionFile = `// Auto-generated file - Do not edit manually
// Generated on: ${new Date().toISOString()}

export const LATEST_VERSION = '${version}';
export const PUBLISHED_AT = '${publishedAt}';
export const BUILD_DATE = '${new Date().toISOString()}';
`;
    
    const outputPath = path.resolve('src/constants/version.ts');
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, versionFile);
    
    console.log(`Version file generated at: ${outputPath}`);
}

generateVersionFile();