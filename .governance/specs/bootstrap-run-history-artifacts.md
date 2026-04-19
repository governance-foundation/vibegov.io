# Bootstrap Run History Artifacts

## Note
This earlier slice established the durable-history requirement for bootstrap reporting.
Its flat `bootstrap-runs/<timestamp>-*.md` layout has now been refined by the newer structured reporting model in `bootstrap-reporting-current-vs-history.md`.

The durable-history intent remains valid:
- bootstrap should preserve historical run evidence
- current reporting should not be the sole historical record

The preferred current structure is now:
- current reporting: `.governance/project/bootstrap/`
- historical bundles: `.governance/project/bootstrap/history/<timestamp>/`

## Historical intent retained
This spec remains useful as the change record for why bootstrap history became mandatory, but the path/layout details should now be taken from the newer structured reporting spec.
