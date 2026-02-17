import { useGSAP } from '../../composables/useGSAP';
import { redSocial } from '../../helpers/ArregloLinks';

const SocialTicker = () => {
  const { tickerRef, play, pause } = useGSAP();

  const infinitasRedes = Array.from({ length: 30 }, () => redSocial).flat();

  return (
    <div 
      ref={tickerRef} 
      onMouseEnter={pause} 
      onMouseLeave={play}
      className="w-full overflow-hidden border-y -mt-[5.3rem] border-white/10 bg-white/5 py-4 z-20"
    >
      <div className="ticker-content inline-flex gap-10 items-center w-max">
        {infinitasRedes.map((sesion, index) => (
          <a 
            key={`${sesion.id}-${index}`}
            target='_blank' 
            rel='noopener noreferrer'
            href={sesion.url}
            className="flex items-center gap-3 text-white/25 px-4 transition-all duration-500 transform hover:text-white hover:scale-110"
          >
            <i className={`${sesion.icon} text-2xl`}></i>
            <span className="uppercase tracking-widest text-sm poppins-medium">
              {sesion.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialTicker;
