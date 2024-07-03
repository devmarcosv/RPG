/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  const marcos = {
    hello: 'world',
  }

})

router.get('/gabriel', async () => {
  const teste = {
    hello: 'world',
  }
  console.log(teste)
})




