export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { reference } = req.body;
  if (!reference) return res.status(400).json({ error: 'No reference provided' });

  try {
    const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` },
    });
    const data = await response.json();

    if (data.data && data.data.status === 'success') {
      return res.status(200).json({ status: 'success', message: 'Payment verified' });
    } else {
      return res.status(400).json({ status: 'failed', message: 'Payment not successful' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}