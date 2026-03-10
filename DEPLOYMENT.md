# Deployment

This site deploys via GitHub Actions workflow:

- `.github/workflows/deploy-pages.yml`

## Requirements

1. Repository setting: `Pages -> Source = GitHub Actions`
2. Custom domain: `vibegov.io` configured in GitHub Pages settings
3. DNS:
   - apex `A` records pointed to GitHub Pages IPs
   - optional `www` `CNAME` to `<org>.github.io`

`website/static/CNAME` is committed with `vibegov.io` so generated builds include the domain.
