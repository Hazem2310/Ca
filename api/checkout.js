export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwRrr50gHfPpB-4zQVJabDsXgDmcFZeqjN0i82BfSORBXUSErt1cNtF1bHxLhyIzcax/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(req.body),
      }
    );

    const text = await response.text();

    try {
      return res.status(200).json(JSON.parse(text));
    } catch {
      return res.status(200).json({ success: true, response: text });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Checkout failed",
    });
  }
}