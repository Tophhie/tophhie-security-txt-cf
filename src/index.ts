export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/.well-known/security.txt' || url.pathname === '/security.txt') {
      const content = `# Tophhie Cloud Security Disclosure
Contact: mailto:security@tophhie.cloud
Expires: 2027-04-14T00:00:00Z
Canonical: https://tophhie.cloud/.well-known/security.txt
Canonical: https://tophhie.co.uk/.well-known/security.txt
Preferred-Languages: en
`;
      return new Response(content, {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'max-age=86400',
        },
      });
    }

    return fetch(request); // pass through everything else
  },
};