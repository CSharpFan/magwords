import type { Config } from "vitest";

type ImportMetaEnv = { readonly [P in keyof Config]: Config[P] };

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
