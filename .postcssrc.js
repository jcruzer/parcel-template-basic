// nodejs에선 ESM 적용 X(브라우저에서 적용되는)
// nodejs에선 CommonJS 적용

// import autoprefixer from 'autoprefixer
//const autoprefixer = require('autoprefixer')

// export {
//   plugins:[
//     autoprefixer
//   ]
// }
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}