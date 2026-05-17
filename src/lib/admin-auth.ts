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

    // Verify the token contains the expected password-derived portion
    const expectedSuffix = Buffer.from(adminPassword).toString('base64').slice(0, 12);
    return token.endsWith(expectedSuffix) && token.startsWith('adm_');
  } catch {
    return false;
  }
}
