import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, service, message, modality } = await req.json()

    await resend.emails.send({
      from: 'Dignity Clinic <onboarding@resend.dev>',
      to: 'transform@vickyvortex.com',
      subject: `New enquiry from ${name}`,
      html: `
        <h2>New enquiry — Dignity Clinic</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service || 'Not specified'}</p>
        <p><strong>Message:</strong><br/>${message}</p>
        <p><strong>Modality:</strong> ${modality || 'Not specified'}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
