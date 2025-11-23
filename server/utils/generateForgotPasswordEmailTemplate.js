export const generateEmailTemplate = (resetPasswordUrl) => {
	return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; 
                max-width: 600px; 
                margin: 40px auto; 
                background-color: #2563eb; /* Azul primario como fondo principal */
                border-radius: 16px; 
                overflow: hidden; 
                box-shadow: 0 20px 40px rgba(37, 99, 235, 0.3);">

      <!-- Contenido con fondo ligeramente más oscuro para mejor lectura fácil -->
      <div style="background-color: rgba(255,255,255,0.98); margin: 12px; border-radius: 12px; padding: 40px 40px 50px;">

        <h1 style="color: #1e40af; text-align: center; font-size: 28px; font-weight: 700; margin: 0 0 32px;">
          Reset Your Password
        </h1>

        <p style="font-size: 16px; line-height: 1.7; color: #374151; margin-bottom: 24px;">
          Hello!
        </p>

        <p style="font-size: 16px; line-height: 1.7; color: #1f2937;">
          We received a request to reset the password for your account. 
          Click the button below to create a new one:
        </p>

        <div style="text-align: center; margin: 40px 0;">
          <a href="${resetPasswordUrl}" 
             style="display: inline-block; 
                    background-color: #2563eb; 
                    color: #ffffff; 
                    font-weight: 600; 
                    font-size: 18px; 
                    text-decoration: none; 
                    padding: 16px 36px; 
                    border-radius: 10px; 
                    box-shadow: 0 8px 20px rgba(37,99,0.35);">
            Reset Password
          </a>
        </div>

        <p style="font-size: 16px; line-height: 1.7; color: #1f2937;">
          If you didn't request this change, you can safely ignore this email. No changes have been made to your account yet.
        </p>

        <p style="font-size: 15px; color: #dc2626; font-weight: 600; margin: 32px 0 12px;">
          ⏰ This link expires in 10 minutes for your security.
        </p>

        <p style="font-size: 14px; color: #4b5563; margin-bottom: 8px;">
          If the button doesn’t work, copy and paste this link into your browser:
        </p>
        <p style="font-size: 14px; background: #eff6ff; padding: 14px; border-radius: 8px; word-break: break-all; color: #2563eb; font-weight: 500;">
          ${resetPasswordUrl}
        </p>
      </div>

      <!-- Footer azul -->
      <div style="background-color: #1d4ed8; padding: 24px; text-align: center; color: #dbeafe;">
        <p style="margin: 0; font-size: 15px;">
          Best regards,<br>
          <strong style="color: #ffffff;">Ecommerce Team</strong>
        </p>
        <p style="margin: 12px 0 0; font-size: 12px; color: #93c5fd;">
          This is an automated message · Please do not reply to this email
        </p>
      </div>
    </div>
  `;
};