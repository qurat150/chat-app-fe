import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import jsconfigPaths from 'vite-jsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin(), jsconfigPaths()],
  server: {
    port: 3000,
    // proxy: {
    //   '/identity-service': 'http://159.89.50.187:8080',
    // },
  },
  // devServer: {
  //   proxy: {
  //     '/identity-service': {
  //       target: 'http://159.89.50.187:8080',
  //       changeOrigin: true,
  //       secure: false,
  //       rewrite: (path) => path.replace(/^\/identity-service/, ''),
  //       configure: (proxy, _options) => {
  //         proxy.on('error', (err, _req, _res) => {
  //           console.log('proxy error', err);
  //         });
  //         proxy.on('proxyReq', (proxyReq, req, _res) => {
  //           console.log('Sending Request to the Target:', req.method, req.url);
  //         });
  //         proxy.on('proxyRes', (proxyRes, req, _res) => {
  //           console.log(
  //             'Received Response from the Target:',
  //             proxyRes.statusCode,
  //             req.url
  //           );
  //         });
  //       },
  //     },
  //   },
  // },
});
