export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request)
    if (!response) return new Response('Not Found', { status: 404 })
    const url = new URL(request.url)
    const headers = new Headers(response.headers)
    const path = url.pathname
    if (/\.(js|css|woff2|svg|png|jpg|jpeg|webp|ico)$/i.test(path)) {
      headers.set('Cache-Control', 'public, max-age=604800')
    } else {
      headers.set('Cache-Control', 'public, max-age=300')
    }
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    })
  },
}
