export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/.well-known/security.txt' || url.pathname === '/security.txt') {
const content = `#
#  Tophhie Cloud
# 
#  Hey there, curious one.
#  Found something? We want to hear it.
#  Responsible disclosure is always appreciated.
#
#  Full policy: https://blog.tophhie.cloud/security-vulnerability-disclosure-policy/
#

Contact: mailto:security@tophhie.cloud
Expires: ${new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('.')[0] + 'Z'}
Canonical: https://tophhie.cloud/.well-known/security.txt
Canonical: https://tophhie.co.uk/.well-known/security.txt
Policy: https://blog.tophhie.cloud/security-vulnerability-disclosure-policy/
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