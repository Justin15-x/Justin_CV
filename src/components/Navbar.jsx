import React, { useEffect, useState } from 'react';

const SECCIONES = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'tecnologias', label: 'Tecnologías' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'educacion', label: 'Educación' },
  { id: 'ubicacion', label: 'Ubicación' },
];

const PERFIL = {
  iniciales: 'JC',
  nombre: 'Curriculum Web',
  github: 'https://github.com/tu-usuario',
  linkedin: 'https://www.linkedin.com/in/justin-camarillo-0709b1363',
  correo: 'justincamarillo93@gmail.com',
};

const ALTURA_NAVBAR = 64;

function IconoGitHub() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function IconoLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function Navbar() {
  const [activa, setActiva] = useState('inicio');
  const [progreso, setProgreso] = useState(0);
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Navegar a una sección compensando la altura de la navbar
  const irA = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const y = el.getBoundingClientRect().top + window.scrollY - ALTURA_NAVBAR;

    window.scrollTo({ top: y, behavior: reducir ? 'auto' : 'smooth' });
    setMenuAbierto(false);
  };

  // Barra de progreso de lectura
  useEffect(() => {
    const alScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgreso(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    alScroll();
    window.addEventListener('scroll', alScroll, { passive: true });
    return () => window.removeEventListener('scroll', alScroll);
  }, []);

  // Detectar qué sección está visible para marcarla como activa
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) setActiva(e.target.id);
        });
      },
      { rootMargin: `-${ALTURA_NAVBAR + 20}px 0px -55% 0px` }
    );

    SECCIONES.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const enlaceBase =
    'relative h-full px-4 flex items-center gap-2 text-sm font-medium transition-colors ' +
    'focus:outline-none focus-visible:bg-cyan-800';

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cyan-950 text-white shadow-lg">
        {/* Barra de progreso de scroll */}
        <div
          className="absolute bottom-0 left-0 h-0.5 bg-blue-300 transition-[width] duration-100"
          style={{ width: `${progreso}%` }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 flex items-center">
          {/* LOGO + estado */}
          <button
            onClick={() => irA('inicio')}
            className="flex items-center gap-3 mr-6 lg:mr-10 focus:outline-none
                       focus-visible:ring-2 focus-visible:ring-cyan-300 rounded-lg"
            aria-label="Ir al inicio"
          >
            <div
              className="w-10 h-10 rounded-full bg-cyan-600 flex items-center
                         justify-center font-bold text-lg"
            >
              {PERFIL.iniciales}
            </div>

            <div className="text-left leading-tight">
              <span className="block font-semibold tracking-wide">{PERFIL.nombre}</span>
              <span className="hidden sm:flex items-center gap-1.5 text-xs text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Disponible para trabajar
              </span>
            </div>
          </button>

          {/* MENÚ ESCRITORIO */}
          <ul className="hidden md:flex items-stretch h-full flex-1">
            {SECCIONES.map(({ id, label }) => {
              const esActiva = activa === id;
              return (
                <li key={id} className="h-full">
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      irA(id);
                    }}
                    aria-current={esActiva ? 'true' : undefined}
                    className={`${enlaceBase} ${
                      esActiva
                        ? 'text-white bg-cyan-900'
                        : 'text-cyan-200 hover:bg-cyan-900 hover:text-white'
                    }`}
                  >
                    {label}
                    {/* Indicador de sección activa */}
                    {esActiva && (
                      <span className="absolute left-3 right-3 bottom-0 h-0.5 rounded-full bg-blue-300" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* ACCIONES (derecha) */}
          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            {/* <a
              href={PERFIL.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hidden sm:flex w-10 h-10 rounded-full items-center justify-center
                         text-cyan-200 hover:bg-cyan-800 hover:text-white transition-colors
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <IconoGitHub />
            </a>  */}

            <a
              href={PERFIL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hidden sm:flex w-10 h-10 rounded-full items-center justify-center
                         text-white hover:bg-cyan-800 hover:text-white transition-colors
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <IconoLinkedIn />
            </a>

            <a
              href={PERFIL.correo}
              className="hidden sm:inline-flex ml-2 px-4 py-2 rounded-full bg-white
                         hover:bg-black text-cyan-950 text-sm font-semibold
                         transition-colors focus:outline-none
                         focus-visible:ring-2 focus-visible:ring-white"
            >
              Contáctame
            </a>

            {/* Botón hamburguesa (móvil) */}
            <button
              onClick={() => setMenuAbierto((v) => !v)}
              aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuAbierto}
              className="md:hidden w-10 h-10 rounded-full flex items-center justify-center
                         hover:bg-cyan-800 transition-colors focus:outline-none
                         focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {menuAbierto ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* MENÚ MÓVIL */}
        {menuAbierto && (
          <div className="md:hidden bg-cyan-900 border-t border-cyan-800">
            <ul className="max-w-7xl mx-auto px-4 py-2">
              {SECCIONES.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      irA(id);
                    }}
                    className={`block px-3 py-3 rounded-lg text-sm font-medium ${
                      activa === id
                        ? 'bg-cyan-800- text-white'
                        : 'text-white hover:bg-cyan-800 hover:text-white'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="max-w-7xl mx-auto px-4 pb-4 flex items-center gap-2">
              <a
                href={PERFIL.correo}
                className="flex-1 text-center px-4 py-2.5 rounded-full bg-blue-500
                           text-cyan-800 text-sm font-semibold"
              >
                Contáctame
              </a>
              <a
                href={`mailto:${PERFIL.correo}?subject=Oportunidad%20Laboral%20-%20CV&body=Hola%20Justin,%20me%20gustó%20tu%20perfil%20y%20me%20gustaría...`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-cyan-800 flex items-center justify-center"
              >
                <IconoGitHub />
              </a>
              <a
                href={PERFIL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-cyan-800 flex items-center justify-center"
              >
                <IconoLinkedIn />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Espacio para la navbar fija */}
      <div className="h-16" />
    </>
  );
}

export default Navbar;
