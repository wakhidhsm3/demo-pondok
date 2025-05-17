import { useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section className='py-16 bg-gray-900'>
      <div className='container mx-auto px-4'>
        <div className='text-center max-w-3xl mx-auto mb-12'>
          <h2 className='text-3xl md:text-4xl font-heading font-bold text-white mb-4'>
            Pondok Pesantren Zuhriyah
          </h2>
        </div>

        <div className='max-w-4xl mx-auto relative rounded-xl overflow-hidden shadow-2xl'>
          {/* Video Embed */}
          <div className='aspect-video bg-gray-800 relative'>
            <iframe
              src={`https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/MahadSafeera/videos/471395912643487/&show_text=false&autoplay=${isPlaying}&mute=${isMuted}`}
              width='100%'
              height='100%'
              allowFullScreen
              allow='autoplay'
              className='w-full h-full'
              style={{ border: 'none', overflow: 'hidden' }}
            ></iframe>

            {/* Play overlay */}
            {!isPlaying && (
              <div
                className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center cursor-pointer'
                onClick={togglePlay}
              >
                <div className='h-20 w-20 bg-primary-600 rounded-full flex items-center justify-center'>
                  <Play size={36} className='text-white ml-2' />
                </div>
              </div>
            )}

            {/* Controls */}
            <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4'>
              <div className='flex items-center justify-between'>
                <button
                  onClick={togglePlay}
                  className='text-white focus:outline-none'
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>

                <button
                  onClick={toggleMute}
                  className='text-white focus:outline-none'
                >
                  {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
