#!/usr/bin/env node
// PAGE-HERO-001..005: verify every emitted page, not just source references.
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const cheerio = require('cheerio');
const heroes = require('../src/data/page-heroes.json');
const root = path.resolve(__dirname, '..');
assert.strictEqual(heroes.length, 104);
assert.strictEqual(new Set(heroes.map(h => h.route)).size, heroes.length);
for (const hero of heroes) {
  const file = path.join(root, 'build', hero.route, 'index.html');
  const $ = cheerio.load(fs.readFileSync(file, 'utf8'));
  const image = $('img.page-hero');
  assert.strictEqual(image.length, 1, `${hero.route}: exactly one hero`);
  for (const [attribute, expected] of Object.entries({src: hero.image, alt: hero.alt, width: String(hero.width), height: String(hero.height)})) {
    assert.strictEqual(image.attr(attribute), expected, `${hero.route}: ${attribute}`);
  }
  assert.strictEqual(image.attr('srcset'), `${hero.srcSet[0]} 640w, ${hero.srcSet[1]} 1280w`, `${hero.route}: responsive images`);
  assert(image.attr('sizes'), `${hero.route}: responsive sizes`);
  for (const selector of ['meta[property="og:image"]', 'meta[name="twitter:image"]']) {
    assert.strictEqual($(selector).length, 1, `${hero.route}: single ${selector}`);
    assert.strictEqual($(selector).attr('content'), `https://vibegov.io${hero.image}`, `${hero.route}: social image`);
  }
  for (const asset of [hero.image, ...hero.srcSet]) {
    assert(fs.statSync(path.join(root, 'build', asset)).size > 0, `${hero.route}: emitted ${asset}`);
  }
}
console.log(`Verified ${heroes.length} emitted page heroes, responsive sources, dimensions, alt text and social metadata.`);
