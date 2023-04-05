const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/pagina_nuria' : '';

module.exports = {
  basePath,
};
