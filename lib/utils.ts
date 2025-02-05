import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: "long",
    day: "numeric",
    year: "numeric"
  })
}

export function parseServerActionResponse<T>(response: T) {
  return JSON.parse(JSON.stringify(response));
}

export const generateWelcomeEmail = (name: string) => {
  return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Welcome to PitchPoint</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;600;700&display=swap');
            body { font-family: 'Work Sans', sans-serif; margin: 0; padding: 0; background-color: #F8F9FA; }
            .container { max-width: 600px; margin: 30px auto; background: white; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); }
            .header { background: #EE2B69; padding: 20px; text-align: center; }
            .header h1 { color: white; font-size: 26px; font-weight: 700; margin: 0; }
            .content { padding: 20px; text-align: center; }
            .content p { font-size: 16px; color: #333; margin: 10px 0; }
            .btn { display: inline-block; background: #EE2B69; color: white; text-decoration: none; font-weight: bold; padding: 12px 24px; border-radius: 6px; margin-top: 20px; }
            .footer { background: #222; color: white; text-align: center; padding: 15px; font-size: 14px; }
            .footer a { color: #EE2B69; text-decoration: none; }
        </style>
    </head>
    <body>
    <div class="container">
        <div class="header">
            <h1>Welcome to PitchPoint, ${name}! 🎉</h1>
        </div>
        <div class="content">
            <p>We are thrilled to have you onboard! 🚀</p>
            <p>PitchPoint is your hub for innovative ideas, collaborations, and startup growth.</p>
            <a href="https://pitchpoint.com/dashboard" class="btn">Get Started</a>
        </div>
        <div class="footer">
            <p>Need help? <a href="https://pitchpoint.com/support">Contact Support</a></p>
            <p>&copy; 2025 PitchPoint. All rights reserved.</p>
        </div>
    </div>
    </body>
    </html>`;
};