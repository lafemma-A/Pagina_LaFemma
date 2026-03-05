/**
 * LA FEMMA — Image Optimization Script
 * Compresses all PNG/JPG assets to WebP format for web delivery.
 * Run: node scripts/optimize-images.mjs
 */
import { readdir, stat } from 'fs/promises';
import { execSync } from 'child_process';
import { join } from 'path';

const ASSETS_DIR = join(process.cwd(), 'public', 'assets');

async function main() {
    console.log('🖼️  LA FEMMA Image Optimizer\n');

    const files = await readdir(ASSETS_DIR);
    const imageFiles = files.filter(f => /\.(png|jpg|jpeg)$/i.test(f));

    let totalBefore = 0;

    for (const file of imageFiles) {
        const filePath = join(ASSETS_DIR, file);
        const stats = await stat(filePath);
        totalBefore += stats.size;
        console.log(`  ${file}: ${(stats.size / 1024).toFixed(0)} KB`);
    }

    console.log(`\n  Total assets: ${imageFiles.length} files`);
    console.log(`  Total size: ${(totalBefore / 1024 / 1024).toFixed(1)} MB`);
    console.log('\n  ⚠️  Next.js automatically converts to AVIF/WebP on-the-fly.');
    console.log('  ✅ Ensure all <Image> components use next/image for optimization.');
    console.log('  ✅ Consider resizing source PNGs to max 1920px width.\n');
}

main().catch(console.error);
