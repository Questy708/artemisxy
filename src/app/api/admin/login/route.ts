import { NextResponse } from 'next/server';
import crypto from 'crypto';

// POST /api/admin/login — authenticate with admin password
export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD;

    // If no ADMIN_PASSWORD is set, deny access with a helpful message
    if (!adminPassword) {
      return NextResponse.json(
        { error: 'Admin access not configured. Set ADMIN_PASSWORD in your .env file.' },
        { status: 403 }
      );
    }

    if (password !== adminPassword) {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }

    // Generate a session token with cryptographic hash
    const timestamp = Date.now().toString();
    const random = Math.random().toString(36).slice(2, 10);
    const hash = crypto.createHash('sha256').update(adminPassword + timestamp).digest('base64url').slice(0, 16);
    const token = `adm_${timestamp}_${random}_${hash}`;

    const response = NextResponse.json({ success: true, message: 'Authenticated' });

    // Set HttpOnly cookie — not accessible via JavaScript, only by the server
    response.cookies.set('artemis_admin_token', token, {
      httpOnly: true,
      secure: false, // Allow cookie over HTTP in development
      sameSite: 'lax', // 'lax' allows the cookie on same-site navigation
      path: '/',
      maxAge: 60 * 60 * 24, // 24 hours
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}

// DELETE /api/admin/login — logout
export async function DELETE() {
  const response = NextResponse.json({ success: true, message: 'Logged out' });
  response.cookies.set('artemis_admin_token', '', {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });
  return response;
}
