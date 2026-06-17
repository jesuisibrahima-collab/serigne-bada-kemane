// data/tiktok-videos.ts
export interface TikTokVideo {
  id: string
  url: string
  caption: string
}

// ← URLs à remplacer par les vraies vidéos TikTok de Serigne Bada Kemane
export const tiktokVideos: TikTokVideo[] = [
  { id: '1', url: 'https://www.tiktok.com/@serignebadakeman/video/7000000000000000001', caption: 'Vidéo 1' },
  { id: '2', url: 'https://www.tiktok.com/@serignebadakeman/video/7000000000000000002', caption: 'Vidéo 2' },
  { id: '3', url: 'https://www.tiktok.com/@serignebadakeman/video/7000000000000000003', caption: 'Vidéo 3' },
  { id: '4', url: 'https://www.tiktok.com/@serignebadakeman/video/7000000000000000004', caption: 'Vidéo 4' },
  { id: '5', url: 'https://www.tiktok.com/@serignebadakeman/video/7000000000000000005', caption: 'Vidéo 5' },
  { id: '6', url: 'https://www.tiktok.com/@serignebadakeman/video/7000000000000000006', caption: 'Vidéo 6' },
]
