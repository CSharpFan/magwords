import type { Config } from "vitest";

type ImportMetaEnv = { readonly [P in keyof Config]: Config[P] };

// biome-ignore lint/correctness/noUnusedVariables: Declaration Merging
interface ImportMeta {
    readonly env: ImportMetaEnv;
}
