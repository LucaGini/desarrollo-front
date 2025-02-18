import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://desarrollo-front-indol.vercel.app/', // URL donde corre Angular
    supportFile: false
  }
});
