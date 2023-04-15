module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('DBCOHScPFVbX1UGgDspIfg==,QFg9JDNyKeVePv75zL9z+A==,4T2cyVLN+3una/lNECatCA==,cO63r4KZZ3/pwCidlsy+mQ=='),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
