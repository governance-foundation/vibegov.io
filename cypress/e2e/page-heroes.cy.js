const heroes = require('../../src/data/page-heroes.json');
const routes = ['/blog/launch-gov-01', '/blog/stop-keeping-your-ai-agents-alive', '/docs/intro', '/docs/published/gov-01-instructions', '/docs/faq/do-i-need-a-specific-ai-provider', '/roles'];

describe('Authored-page artwork (PAGE-HERO-001..004)', () => {
  for (const viewport of [[390, 844], [1440, 1000]]) {
    for (const route of routes) {
      it(`${route} loads its accessible hero at ${viewport[0]}px`, () => {
        const expected = heroes.find(hero => hero.route === route);
        cy.viewport(...viewport);
        cy.visit(route);
        cy.get('img.page-hero').should('have.attr', 'alt', expected.alt)
          .and('be.visible').and($images => {
            const image = $images[0];
            expect(image.complete).to.equal(true);
            expect(image.naturalWidth).to.be.greaterThan(0);
            expect(image.getBoundingClientRect().right).to.be.at.most(viewport[0]);
            expect(image.currentSrc).to.match(/-\d+\.webp$/);
          });
        cy.reload();
        cy.get('img.page-hero').should('be.visible');
      });
    }
  }
  it('preserves the existing article heroes', () => {
    const existing = [
      {route: '/blog/creativity-unleashed-create-while-you-sleep', stem: 'creativity-unleashed-create-while-you-sleep-hero', alt: 'A creator sleeping while a governed network of AI agents continues building overnight'},
      {route: '/blog/how-to-avoid-death-by-1000-prompts', stem: 'death-by-1000-prompts-hero', alt: 'Death by 1000 prompts hero image'},
    ];
    for (const hero of existing) {
      cy.visit(hero.route);
      // Markdown images are fingerprinted by Docusaurus; verify the original artwork and loaded pixels.
      cy.get(`article img[alt="${hero.alt}"]`).should('be.visible').and($images => {
        const image = $images[0];
        expect(image.getAttribute('src')).to.match(new RegExp(`/assets/images/${hero.stem}-[a-f0-9]+\\.png$`));
        expect(image.complete).to.equal(true);
        expect(image.naturalWidth).to.be.greaterThan(0);
      });
    }
  });
});
