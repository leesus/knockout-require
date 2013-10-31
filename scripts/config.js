require.config({
  baseUrl: 'scripts',
  paths: {
    'test': '../test',
    'jquery': 'components/jquery/jquery',
    'ko': 'components/knockout/build/output/knockout-latest'
  },
  urlArgs: 'bust=' + (new Date()).getTime()
});