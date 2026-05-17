import { cookies } from 'next/headers';

// Verify admin session from HttpOnly cookie
export async function verifyAdminAuth(): Promise<boolean> {
  const adminPassword = process.env.ADMIN_PASSWORD;

  // If no password is configured, no admin access
  if (!adminPassword) return false;

  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('artemis_admin_token')?.value;
    if (!token) return false;

    // Token format: adm_{timestamp}_{random}_{hash}
    // The hash may contain underscores, so we only split on the first 3 underscores
    if (!token.startsWith('adm_')) return false;

    const afterPrefix = token.slice(4); // Remove 'adm_'
    const firstUnderscore = afterPrefix.indexOf('_');
    if (firstUnderscore === -1) return false;

    const timestamp = afterPrefix.slice(0, firstUnderscore);
    const afterTimestamp = afterPrefix.slice(firstUnderscore + 1);
    const secondUnderscore = afterTimestamp.indexOf('_');
    if (secondUnderscore === -1) return false;

    const random = afterTimestamp.slice(0, secondUnderscore);
    const hash = afterTimestamp.slice(secondUnderscore + 1);

    if (!timestamp || !random || !hash) return false;

    // Verify the hash matches what we'd generate from the current password + timestamp
    const crypto = await import('crypto');
    const expectedHash = crypto.createHash('sha256').update(adminPassword + timestamp).digest('base64url').slice(0, 16);
    return hash === expectedHash;
  } catch {
    return false;
  }
}
