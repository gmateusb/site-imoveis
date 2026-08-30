import type { VideoImovelPublico } from '../lib/tipos'

export default function VideoImovel({ video, nome }: { video: VideoImovelPublico; nome: string }) {
  return (
    <div className="w-full rounded-2xl overflow-hidden" style={{ backgroundColor: '#000000' }}>
      {video.tipo === 'youtube' && video.youtube_id ? (
        <iframe
          src={`https://www.youtube.com/embed/${video.youtube_id}`}
          title={nome}
          className="w-full block"
          style={{ aspectRatio: '16 / 9', border: 0 }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <video
          src={video.url ?? undefined}
          controls
          preload="metadata"
          className="w-full block"
          style={{ aspectRatio: '16 / 9' }}
        />
      )}
    </div>
  )
}
