/**
 * We split the user.ts code into two files to avoid some server-only
 * code (Oslo's hashing functions) being imported on the client.
 */
import { type UserEntityWithAuth } from '../server/auth/user.js';
export declare function getEmail(user: UserEntityWithAuth): string | null;
export declare function getUsername(user: UserEntityWithAuth): string | null;
export declare function getFirstProviderUserId(user?: UserEntityWithAuth): string | null;
