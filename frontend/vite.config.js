import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        define: {
            'process.env.TESTNET_API': JSON.stringify(env.TESTNET_API),
            'process.env.MAINNET_API': JSON.stringify(env.MAINNET_API),
            // If you want to exposes all env variables, which is not recommended
            // 'process.env': env
        },
    };
});