export default function manifest() {
  return {
    name: 'Arifur Rahman Portfolio',
    short_name: 'Arifur Rahman',
    description: 'Full-Stack Developer Portfolio',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
