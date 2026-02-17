import { useGSAP } from '../../composables/useGSAP';
import { redSocial } from '../../helpers/ArregloLinks';

const SocialTicker = () => {
  const { tickerRef, play, pause } = useGSAP();

  // 30 repeticiones es excelente para cubrir cualquier resolución
  const infinitasRedes = Array.from({ length: 30 }, () => redSocial).flat();

  return (
    <div 
      ref={tickerRef} 
      onMouseEnter={pause} 
      onMouseLeave={play}
      /* He corregido el -mt si es que causa solapamiento no deseado y asegurado el z-index */
      className="w-full overflow-hidden border-y border-white/10 bg-white/5 py-4 z-20 -mt-[5.3rem]"
    >
      <div className="ticker-content inline-flex gap-10 items-center w-max">
        {infinitasRedes.map((sesion, index) => (
          <a 
            key={`ticker-${index}`} // Más simple y seguro
            target='_blank' 
            rel='noopener noreferrer'
            href={sesion.url}
            /* text-white/25 es perfecto para el look "low-key" que resalta al hover */
            className="flex items-center gap-3 text-white/25 px-4 transition-all duration-500 transform hover:text-white hover:scale-110 select-none"
          >
            <i className={`${sesion.icon} text-2xl`}></i>
            <span className="uppercase tracking-widest text-sm poppins-medium whitespace-nowrap">
              {sesion.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialTicker;
