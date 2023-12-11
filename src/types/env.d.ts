export {};
declare global {
    namespace NodeJS {
      interface ProcessEnv {
        PRIVATE_KEY: string;
        NETWORK: string;
        // add more environment variables and their types here
      }
    }
  }