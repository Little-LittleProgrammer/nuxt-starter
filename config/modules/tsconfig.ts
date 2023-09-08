import { INuxtConfig } from './types';

export const tsConfig:INuxtConfig = {
    typescript: {
        tsConfig: {
            include: ['node_modules/@pixiu/types/**/*.d.ts']
        }
    }
};
