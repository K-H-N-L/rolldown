import { defineTest } from 'rolldown-tests'

export default defineTest({
  config: {
    plugins: [
      {
        name: 'remove-chunk',
        generateBundle(outputOptions, bundle) {
          delete bundle['main.js']
        },
      },
    ],
  },
})
