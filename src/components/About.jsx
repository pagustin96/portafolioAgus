import '../styles/About.css'
import { useState, useEffect } from 'react'
export const About = () => {
    const [activeSection, setActiveSection] = useState('');

    const handleMenuClick = (sectionId) => {
        setActiveSection(sectionId);
      }

     
    const handleScroll = () => {
        const scrollPosition = window.scrollY + 100; // Considera un área cercana al borde superior
        const sections = ['about', 'experience', 'projects', 'skills']
    
        // Encuentra la sección actual basada en la posición de desplazamiento
        const currentSection = sections.find((section) => {
          const element = document.getElementById(section);
          return element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition;
        })
    
        setActiveSection(currentSection || '');
    }

    useEffect(() => {
        // Agregar el evento de escucha del desplazamiento al montar el componente
        window.addEventListener('scroll', handleScroll);
    
        // Eliminar el evento de escucha del desplazamiento al desmontar el componente
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); // Se ejecuta solo una vez al montar


  return (
    <div className='about-container'>
        <header className='header-container'>
            <div className='header-wrapper'>
                {/*<img src='./img/perfil_bg.png' alt='perfil' className='perfil-img'/>*/}
                <h2 className='header-h2'>Agustin</h2>
                <h3 className='header-h3'>Programador Full Stack</h3>
                <p className='header-p'>
                    Diseño y desarrollo productos accesibles y experiencias digitales para la web.</p>
                <nav className='menu'>
                    <ul>
                        <li><a href='#about' className='list-a' ><hr className='hr-nav'/><span className={`option-menu ${activeSection === 'about' ? 'active' : ''}`} onClick={() => handleMenuClick('about')}>Sobre Mi</span></a></li>
                        <li><a href='#experience' className={`list-a ${activeSection === 'experience' ? 'active' : ''}`} onClick={() => handleMenuClick('experience')}><hr className='hr-nav'/><span className='option-menu'>Experiencia</span></a></li>
                        <li><a href='#projects' className={`list-a ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => handleMenuClick('projects')}><hr className='hr-nav'/><span className='option-menu'>Proyectos</span></a></li>
                        <li><a href='#skills' className={`list-a ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => handleMenuClick('skills')}><hr className='hr-nav'/><span className='option-menu'>Skills</span></a></li>
                    </ul>
                </nav>
                <div className='figura-box linkedin'>
                <a href='https://www.linkedin.com/in/pasanchezdev/' target='_blank' rel="noreferrer" >
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="#currentColor"></path> <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill="#currentColor"></path> <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" fill="#currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#currentColor"></path> </g></svg>
                </a>
                </div>
                
            </div>
            
        </header>
        <div className='side-container'>
            <section id='about'>
                <p className='about-p'>
                ¡Hola! Soy Agustin, un apasionado programador full stack con enfoque en el frontend. Actualmente, combino mis estudios en programación en la Universidad 
                Tecnológica Nacional con la construcción de aplicaciones web en Ar Consultores. Mi experiencia abarca la creación completa de aplicaciones web, destacándome en 
                JavaScript y React para diseñar interfaces interactivas. He trabajado tanto en frontend como en backend, colaborando en proyectos con Node.js y Java/Spring Boot. 
                Como estudiante, estoy siempre en busca de aprender y enfrentar nuevos desafíos tecnológicos. Abierto a oportunidades y colaboraciones, estoy listo para construir 
                el futuro juntos. ¡Conéctate y compartamos conocimientos!
                </p>
            </section>
            <section id='experience' className='section-container'>
                <h2>Experiencia</h2>
                <div className='experience-box'>
                    <div className='experience-date'>ABR - PRESENT</div>
                    <div className='experience-data'>
                        <h3 className='exp-h3'>AR Conultores</h3>
                        <h4 className='exp-h4'>Full Stack Developer</h4>
                        <p className='exp-description'>Actualmente, desempeño un papel esencial como miembro de un 
                        equipo en el análisis, diseño y desarrollo de un sistema que integra módulos de gestión de 
                        recursos humanos, control de inventario y otras funciones fundamentales.
                        Mi enfoque principal se encuentra en el frontend, donde me especializo en la creación 
                        de experiencias de usuario atractivas y eficientes, combinando el diseño y 
                        la programación para ofrecer soluciones innovadoras.</p>
                        <p>Javascript - React Js - Java - SpringBoot - MySql</p>
                    </div>
                </div>
                <div className='experience-box'>
                    <div className='experience-date'>MAR 2023 - SEPT 2022</div>
                    <div className='experience-data'>
                        <h3 className='exp-h3'>Be Innovation Tech</h3>
                        <h4 className='exp-h4'>Full Stack Developer</h4>
                        <p className='exp-description'>Participé activamente en el equipo de desarrollo web de ERP 
                        Odoo, colaborando estrechamente con el equipo de analistas. Mi rol consistió en el desarrollo,
                         modificación, mantenimiento e implementación de software de gestión, asegurando la eficacia
                          y la optimización de los procesos empresariales.</p>
                        <p>Javascript - React - Node Js - Express Js - MySql</p>
                    </div>
                </div>
            </section>
            <section id='projects' className='section-container'>
                <h2>Proyectos</h2>
                <a href='https://ispc-datos-academicos.web.app/login' target='_blank' className='experience-box'>
                    <div className='img-box'>
                        <img src='./img/ispc-home.jpg' alt='ispc' className='img-box'/>
                    </div>
                    <div className='experience-data proyect-desc'>
                        <h3 className='exp-h3'>Sistema de gestion de Universidad</h3>
                        <p className='exp-description'>Sistema desarrollado para el Instituto Superior Politecnico 
                        de Cordoba como trabajo final para la certificacion de Desarrollador Web Full Stack Python.<br/>
                        Integre un equipo de 7 personas donde mi rol fue liderar el equipo de backend.<br />
                        <strong>Tecnologias utilizadas: Angular, TypeScript, Django, Python.</strong></p>
                    </div>
                </a>
                <div className='experience-box'>
                    <div className='img-box'>
                        <img src='./img/ar-cons.jpg' alt="arcons" className='img-box' />
                    </div>
                    <div className='experience-data proyect-desc'>
                        <h3 className='exp-h3'>Sistema de Recursos Humanos</h3>
                        <p className='exp-description'>Software desarrollado para la empresa AR Consultores, 
                        Su principal funcion es gestionar de manera eficiente el area de reclutamiento IT, facilitando
                        el acceso a la informacion de los candidatos y las vacantes.<br />
                        Integre un equipo de 9 personas donde me desempeñe como lider del area front end. <br />
                        Actualmente me encuentro a cargo del proyecto.<br />
                        <strong>Tecnologias utilizadas: React, JavaScript, Java, Spring Boot, Pl Sql, Linear.</strong>
                        </p>
                    </div>
                </div>
            </section>
            <section id='skills' className='section-container'>
                <h2>Skills</h2>
                <div className='figures-wrapper'>

                    <figure title='HTML' className='figura-box'>
                    <svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_iconCarrier"> <path d="M2 0h28l-2.547 28.75-11.484 3.25-11.417-3.25zM11.375 13l-0.307-3.625 13.411 0.005 0.307-3.495-17.573-0.005 0.932 10.682h12.167l-0.432 4.568-3.88 1.068-3.938-1.078-0.255-2.813h-3.479l0.443 5.563 7.229 1.932 7.172-1.927 0.99-10.875z"></path> </g></svg>
                    <div className='figure-text'>HTML</div>
                    </figure>

                    <figure title='CSS' className='figura-box'>
                    <svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_iconCarrier"> <path d="M4 2l2.181 24.738 9.819 3.262 9.819-3.262 2.181-24.738zM23.569 7l-0.3 2.956-7.225 3.087h6.969l-0.8 9.163-6.137 1.794-6.175-1.825-0.4-4.619h3.056l0.2 2.394 3.287 0.831 3.419-0.962 0.231-3.85-10.406-0.031-0.225-2.894 7.413-3.087h-7.681l-0.363-2.956z"></path> </g></svg>
                        <div className='figure-text'>CSS</div>
                    </figure>
                    
                    <figure title='REACT' className='figura-box'>
                        <svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_iconCarrier"><path d="M16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854c1.573 0 2.854-1.281 2.854-2.854s-1.281-2.854-2.854-2.854zM8.010 21.672l-0.63-0.156c-4.688-1.188-7.38-3.198-7.38-5.521s2.693-4.333 7.38-5.521l0.63-0.156 0.177 0.625c0.474 1.635 1.083 3.229 1.818 4.771l0.135 0.281-0.135 0.286c-0.734 1.536-1.344 3.13-1.818 4.771zM7.089 11.932c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063c0.438-1.391 0.964-2.745 1.578-4.063-0.615-1.318-1.141-2.672-1.578-4.063zM23.99 21.672l-0.177-0.625c-0.474-1.635-1.083-3.229-1.818-4.766l-0.135-0.286 0.135-0.286c0.734-1.536 1.344-3.13 1.818-4.771l0.177-0.62 0.63 0.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zM23.333 15.995c0.641 1.385 1.172 2.745 1.578 4.063 3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063c-0.438 1.385-0.964 2.745-1.578 4.063zM7.078 11.927l-0.177-0.625c-1.318-4.646-0.917-7.979 1.099-9.141 1.979-1.141 5.151 0.208 8.479 3.625l0.453 0.464-0.453 0.464c-1.182 1.229-2.26 2.552-3.229 3.958l-0.182 0.255-0.313 0.026c-1.703 0.135-3.391 0.406-5.047 0.813zM9.609 3.089c-0.359 0-0.677 0.073-0.943 0.229-1.323 0.766-1.557 3.422-0.646 7.005 1.422-0.318 2.859-0.542 4.313-0.672 0.833-1.188 1.75-2.323 2.734-3.391-2.078-2.026-4.047-3.172-5.458-3.172zM22.396 30.234c-0.005 0-0.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-0.453-0.464 0.453-0.464c1.182-1.229 2.26-2.552 3.229-3.958l0.177-0.255 0.313-0.031c1.703-0.13 3.391-0.401 5.052-0.813l0.63-0.156 0.177 0.625c1.318 4.646 0.917 7.974-1.099 9.135-0.49 0.281-1.042 0.422-1.604 0.411zM16.932 25.729c2.078 2.026 4.047 3.172 5.458 3.172h0.005c0.354 0 0.672-0.078 0.938-0.229 1.323-0.766 1.563-3.422 0.646-7.005-1.422 0.318-2.865 0.542-4.313 0.667-0.833 1.193-1.75 2.323-2.734 3.396zM24.922 11.927l-0.63-0.161c-1.661-0.406-3.349-0.677-5.052-0.813l-0.313-0.026-0.177-0.255c-0.969-1.406-2.047-2.729-3.229-3.958l-0.453-0.464 0.453-0.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zM19.667 9.651c1.521 0.141 2.969 0.365 4.313 0.672 0.917-3.583 0.677-6.24-0.646-7.005-1.318-0.76-3.797 0.406-6.401 2.943 0.984 1.073 1.896 2.203 2.734 3.391zM9.609 30.234c-0.563 0.010-1.12-0.13-1.609-0.411-2.016-1.161-2.417-4.49-1.099-9.135l0.177-0.625 0.63 0.156c1.542 0.391 3.24 0.661 5.047 0.813l0.313 0.031 0.177 0.255c0.969 1.406 2.047 2.729 3.229 3.958l0.453 0.464-0.453 0.464c-2.526 2.604-4.969 4.031-6.865 4.031zM8.021 21.667c-0.917 3.583-0.677 6.24 0.646 7.005 1.318 0.75 3.792-0.406 6.401-2.943-0.984-1.073-1.901-2.203-2.734-3.396-1.453-0.125-2.891-0.349-4.313-0.667zM16 22.505c-1.099 0-2.224-0.047-3.354-0.141l-0.313-0.026-0.182-0.26c-0.635-0.917-1.24-1.859-1.797-2.828-0.563-0.969-1.078-1.958-1.557-2.969l-0.135-0.286 0.135-0.286c0.479-1.010 0.995-2 1.557-2.969 0.552-0.953 1.156-1.906 1.797-2.828l0.182-0.26 0.313-0.026c2.234-0.188 4.479-0.188 6.708 0l0.313 0.026 0.182 0.26c1.276 1.833 2.401 3.776 3.354 5.797l0.135 0.286-0.135 0.286c-0.953 2.021-2.073 3.964-3.354 5.797l-0.182 0.26-0.313 0.026c-1.125 0.094-2.255 0.141-3.354 0.141zM13.073 21.057c1.969 0.151 3.885 0.151 5.859 0 1.099-1.609 2.078-3.302 2.927-5.063-0.844-1.76-1.823-3.453-2.932-5.063-1.948-0.151-3.906-0.151-5.854 0-1.109 1.609-2.089 3.302-2.932 5.063 0.849 1.76 1.828 3.453 2.932 5.063z"></path> </g></svg>
                        <div className='figure-text'>React Js</div>
                    </figure>
                    <figure title='JS' className='figura-box'>
                    <svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h32v32h-32zM29.38 24.37c-0.234-1.464-1.188-2.688-4.005-3.833-0.979-0.458-2.073-0.781-2.396-1.521-0.12-0.438-0.141-0.677-0.063-0.938 0.203-0.865 1.219-1.12 2.021-0.88 0.521 0.161 1 0.557 1.302 1.198 1.38-0.901 1.38-0.901 2.339-1.5-0.359-0.557-0.536-0.802-0.781-1.036-0.839-0.943-1.958-1.422-3.776-1.38l-0.943 0.12c-0.901 0.219-1.76 0.698-2.281 1.339-1.516 1.719-1.078 4.719 0.76 5.964 1.818 1.359 4.479 1.656 4.823 2.938 0.318 1.563-1.161 2.063-2.625 1.88-1.078-0.24-1.677-0.781-2.339-1.781l-2.438 1.401c0.276 0.641 0.599 0.917 1.078 1.479 2.318 2.339 8.12 2.219 9.161-1.339 0.036-0.12 0.318-0.943 0.099-2.198zM17.401 14.708h-2.995c0 2.583-0.016 5.151-0.016 7.74 0 1.641 0.083 3.151-0.182 3.615-0.443 0.917-1.573 0.802-2.089 0.641-0.526-0.26-0.797-0.62-1.104-1.141-0.089-0.141-0.151-0.26-0.172-0.26l-2.432 1.5c0.406 0.839 1 1.563 1.766 2.021 1.141 0.682 2.672 0.901 4.276 0.542 1.042-0.302 1.943-0.922 2.411-1.88 0.682-1.24 0.536-2.76 0.531-4.464 0.016-2.74 0-5.479 0-8.24z"></path> </svg>
                        <div className='figure-text'>JavaScript</div>
                    </figure>
                    <figure title='GIT' className='figura-box'>
                    <svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_iconCarrier"><path d="M31.396 14.573l-13.974-13.969c-0.802-0.807-2.109-0.807-2.917 0l-2.896 2.901 3.682 3.677c0.859-0.286 1.839-0.094 2.516 0.589 0.688 0.688 0.88 1.677 0.589 2.531l3.542 3.547c0.859-0.297 1.849-0.104 2.531 0.583 0.964 0.958 0.964 2.51 0 3.469-0.958 0.958-2.505 0.958-3.464 0-0.719-0.719-0.901-1.781-0.542-2.661l-3.318-3.302v8.703c0.234 0.115 0.458 0.271 0.651 0.464 0.953 0.964 0.953 2.51 0 3.469-0.958 0.958-2.516 0.958-3.479 0-0.958-0.958-0.958-2.505 0-3.469 0.245-0.24 0.516-0.417 0.807-0.536v-8.786c-0.286-0.125-0.563-0.297-0.802-0.536-0.724-0.724-0.901-1.786-0.526-2.677l-3.615-3.635-9.583 9.578c-0.797 0.802-0.797 2.109 0 2.917l13.974 13.969c0.807 0.807 2.109 0.807 2.917 0l13.906-13.906c0.807-0.802 0.807-2.109 0-2.917z"></path> </g></svg>
                        <div className='figure-text'>Git</div>
                    </figure>
                    <figure title='JAVA' className='figura-box'>
                    <svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_iconCarrier"><path d="M11.803 24.745c0 0-1.224 0.713 0.869 0.952 2.536 0.292 3.833 0.251 6.625-0.281 0 0 0.733 0.464 1.76 0.865-6.265 2.683-14.177-0.161-9.255-1.536zM11.036 21.245c0 0-1.375 1.015 0.719 1.228 2.715 0.281 4.849 0.308 8.552-0.405 0 0 0.511 0.516 1.319 0.801-7.573 2.213-16.011 0.172-10.589-1.624zM17.489 15.303c1.541 1.776-0.407 3.375-0.407 3.375s3.917-2.027 2.12-4.557c-1.681-2.365-2.973-3.536 4.005-7.584 0 0-10.953 2.735-5.719 8.767zM25.771 27.339c0 0 0.907 0.744-0.995 1.323-3.615 1.093-15.047 1.421-18.224 0.041-1.14-0.495 1-1.187 1.672-1.328 0.703-0.156 1.104-0.124 1.104-0.124-1.271-0.896-8.208 1.755-3.525 2.515 12.776 2.073 23.285-0.932 19.968-2.427zM12.391 17.615c0 0-5.817 1.38-2.063 1.88 1.589 0.213 4.751 0.167 7.699-0.083 2.405-0.204 4.823-0.636 4.823-0.636s-0.849 0.364-1.464 0.787c-5.907 1.552-17.317 0.828-14.031-0.76 2.776-1.339 5.036-1.188 5.036-1.188zM22.823 23.448c6-3.125 3.224-6.12 1.292-5.713-0.475 0.093-0.688 0.183-0.688 0.183s0.172-0.277 0.511-0.396c3.833-1.349 6.781 3.973-1.235 6.083 0-0.005 0.095-0.083 0.12-0.156zM19.203 0c0 0 3.324 3.323-3.156 8.437-5.192 4.104-1.183 6.443 0 9.115-3.031-2.735-5.255-5.14-3.765-7.38 2.192-3.297 8.26-4.891 6.921-10.172zM12.979 31.901c5.761 0.364 14.609-0.208 14.824-2.932 0 0-0.407 1.031-4.767 1.853-4.916 0.927-10.984 0.817-14.583 0.224 0 0 0.74 0.609 4.525 0.855z"></path> </g></svg>
                        <div className='figure-text'>Java</div>
                    </figure>
                    <figure title='MYSQL' className='figura-box'>
                        <svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_iconCarrier"><path d="M21.875 7.568c-0.156 0-0.26 0.021-0.365 0.047v0.016h0.016c0.073 0.135 0.193 0.24 0.286 0.365 0.073 0.141 0.135 0.286 0.203 0.427l0.021-0.021c0.125-0.089 0.188-0.229 0.188-0.443-0.052-0.063-0.063-0.13-0.109-0.188-0.052-0.089-0.167-0.135-0.24-0.203zM7.693 25.161h-1.234c-0.042-2.083-0.167-4.042-0.359-5.88h-0.010l-1.88 5.88h-0.943l-1.865-5.88h-0.016c-0.135 1.76-0.224 3.724-0.26 5.88h-1.125c0.073-2.625 0.255-5.083 0.547-7.375h1.531l1.781 5.417h0.010l1.797-5.417h1.458c0.323 2.688 0.516 5.146 0.573 7.375zM13.047 19.719c-0.5 2.729-1.167 4.714-1.984 5.948-0.646 0.953-1.349 1.432-2.115 1.432-0.203 0-0.453-0.063-0.755-0.188v-0.656c0.151 0.021 0.323 0.036 0.516 0.036 0.359 0 0.646-0.104 0.865-0.297 0.26-0.24 0.391-0.51 0.391-0.807 0-0.208-0.099-0.625-0.307-1.26l-1.349-4.208h1.214l0.969 3.146c0.219 0.719 0.313 1.214 0.271 1.5 0.536-1.417 0.906-2.969 1.115-4.646zM29.484 25.161h-3.51v-7.375h1.182v6.469h2.328zM25.057 25.339l-1.354-0.667c0.12-0.099 0.234-0.208 0.339-0.333 0.578-0.672 0.865-1.677 0.865-3 0-2.443-0.958-3.661-2.875-3.661-0.938 0-1.672 0.307-2.198 0.927-0.573 0.677-0.865 1.677-0.865 2.995 0 1.297 0.255 2.245 0.766 2.854 0.469 0.542 1.172 0.818 2.115 0.818 0.349 0 0.672-0.042 0.964-0.13l1.766 1.031 0.484-0.833zM20.667 23.682c-0.302-0.479-0.448-1.25-0.448-2.313 0-1.859 0.563-2.786 1.693-2.786 0.589 0 1.026 0.224 1.302 0.667 0.297 0.484 0.448 1.245 0.448 2.297 0 1.87-0.568 2.813-1.693 2.813-0.594 0-1.026-0.224-1.307-0.667zM18.458 23.12c0 0.625-0.229 1.141-0.693 1.536-0.458 0.401-1.068 0.604-1.844 0.604-0.724 0-1.417-0.229-2.099-0.688l0.318-0.635c0.583 0.292 1.109 0.438 1.589 0.438 0.443 0 0.792-0.099 1.042-0.292 0.25-0.198 0.401-0.474 0.401-0.823 0-0.438-0.307-0.813-0.865-1.125-0.516-0.286-1.552-0.875-1.552-0.875-0.563-0.411-0.839-0.849-0.839-1.573 0-0.599 0.208-1.078 0.625-1.443 0.422-0.375 0.958-0.557 1.625-0.557 0.682 0 1.307 0.182 1.87 0.547l-0.286 0.635c-0.479-0.203-0.953-0.307-1.417-0.307-0.38 0-0.672 0.094-0.875 0.276s-0.328 0.411-0.328 0.698c0 0.438 0.313 0.813 0.885 1.135 0.526 0.286 1.583 0.891 1.583 0.891 0.578 0.406 0.865 0.844 0.865 1.557zM30.964 15.313c-0.714-0.016-1.266 0.057-1.729 0.255-0.13 0.052-0.344 0.052-0.365 0.219 0.073 0.073 0.083 0.188 0.146 0.286 0.109 0.177 0.292 0.417 0.464 0.542 0.188 0.146 0.375 0.292 0.568 0.417 0.349 0.214 0.74 0.339 1.083 0.552 0.193 0.125 0.391 0.286 0.583 0.417 0.099 0.068 0.161 0.188 0.286 0.229v-0.026c-0.063-0.078-0.078-0.193-0.141-0.286-0.089-0.089-0.177-0.167-0.266-0.255-0.26-0.349-0.578-0.651-0.927-0.901-0.286-0.193-0.911-0.464-1.026-0.792l-0.016-0.021c0.193-0.016 0.422-0.089 0.609-0.141 0.302-0.078 0.583-0.063 0.896-0.141 0.141-0.036 0.281-0.078 0.427-0.125v-0.078c-0.161-0.161-0.281-0.38-0.448-0.531-0.453-0.391-0.953-0.776-1.469-1.094-0.281-0.182-0.635-0.297-0.932-0.448-0.104-0.052-0.286-0.078-0.344-0.167-0.161-0.198-0.255-0.453-0.37-0.688-0.255-0.49-0.505-1.031-0.729-1.552-0.161-0.349-0.255-0.693-0.453-1.016-0.917-1.516-1.917-2.432-3.448-3.333-0.328-0.188-0.724-0.266-1.141-0.365-0.224-0.010-0.443-0.026-0.667-0.036-0.146-0.063-0.286-0.229-0.411-0.313-0.51-0.323-1.823-1.016-2.193-0.099-0.24 0.583 0.354 1.151 0.563 1.443 0.151 0.208 0.344 0.438 0.453 0.667 0.063 0.156 0.078 0.318 0.141 0.479 0.141 0.391 0.276 0.828 0.464 1.193 0.099 0.188 0.203 0.385 0.328 0.552 0.073 0.099 0.198 0.141 0.224 0.302-0.125 0.182-0.135 0.448-0.203 0.667-0.323 1.010-0.198 2.255 0.255 3 0.146 0.224 0.484 0.714 0.938 0.526 0.401-0.161 0.313-0.667 0.427-1.115 0.026-0.109 0.010-0.177 0.063-0.25v0.021c0.13 0.25 0.255 0.49 0.37 0.74 0.271 0.438 0.755 0.891 1.156 1.193 0.214 0.161 0.38 0.438 0.646 0.536v-0.026h-0.021c-0.057-0.078-0.13-0.115-0.203-0.177-0.161-0.161-0.339-0.359-0.469-0.536-0.37-0.5-0.703-1.052-0.995-1.62-0.146-0.281-0.271-0.583-0.385-0.859-0.052-0.104-0.052-0.266-0.141-0.318-0.135 0.193-0.333 0.359-0.427 0.604-0.172 0.38-0.188 0.854-0.255 1.344-0.031 0.010-0.016 0-0.031 0.021-0.286-0.073-0.385-0.365-0.49-0.615-0.271-0.635-0.313-1.651-0.083-2.38 0.063-0.188 0.328-0.776 0.224-0.953-0.057-0.172-0.234-0.271-0.328-0.406-0.12-0.167-0.24-0.38-0.323-0.568-0.214-0.5-0.318-1.052-0.552-1.552-0.104-0.229-0.292-0.469-0.443-0.682-0.172-0.24-0.359-0.411-0.49-0.693-0.047-0.099-0.109-0.26-0.036-0.365 0.016-0.073 0.052-0.099 0.125-0.12 0.115-0.099 0.448 0.026 0.563 0.083 0.328 0.13 0.604 0.255 0.88 0.443 0.125 0.089 0.26 0.255 0.422 0.302h0.188c0.286 0.063 0.604 0.016 0.87 0.099 0.474 0.151 0.901 0.37 1.286 0.609 1.167 0.745 2.125 1.797 2.776 3.052 0.109 0.203 0.156 0.391 0.255 0.604 0.182 0.443 0.417 0.885 0.604 1.307s0.365 0.849 0.635 1.198c0.135 0.188 0.667 0.286 0.911 0.38 0.177 0.083 0.453 0.156 0.609 0.25 0.307 0.188 0.609 0.401 0.896 0.609 0.146 0.099 0.589 0.323 0.615 0.5z"></path> </g></svg>
                        <div className='figure-text'>MySql</div>
                    </figure>
                    <figure title='JIRA' className='figura-box'>
                    <svg fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>jira</title> <path d="M29.762 1.004h-14.443c0 0 0 0 0 0 0 3.599 2.918 6.517 6.517 6.517 0 0 0 0 0 0h2.66v2.571c0.003 3.591 2.91 6.502 6.498 6.512h0.001v-14.343c0-0.002 0-0.003 0-0.005 0-0.685-0.55-1.241-1.232-1.251h-0.001zM22.616 8.198h-14.443c0.001 3.599 2.918 6.516 6.517 6.516h2.66v2.572c0.003 3.598 2.919 6.513 6.517 6.516h0v-14.352c0-0.691-0.56-1.251-1.251-1.251v0zM15.464 15.391h-14.46c0.002 3.6 2.921 6.517 6.521 6.517 0.006 0 0.012 0 0.018-0h2.661v2.57c0 0 0 0 0 0 0 3.598 2.916 6.515 6.514 6.517h0v-14.348c0-0.694-0.562-1.256-1.256-1.256v0z"></path> </g></svg>
                        <div className='figure-text'>Jira</div>
                    </figure>
                    <figure title='Spring' className='figura-box'>
                    <svg  fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd"> <path d="M0 0h32v32H0z"></path> <path fill="currentColor" d="M5.466 27.993c.586.473 1.446.385 1.918-.202.475-.585.386-1.445-.2-1.92-.585-.474-1.444-.383-1.92.202-.45.555-.392 1.356.115 1.844l-.266-.234C1.972 24.762 0 20.597 0 15.978 0 7.168 7.168 0 15.98 0c4.48 0 8.53 1.857 11.435 4.836.66-.898 1.232-1.902 1.7-3.015 2.036 6.118 3.233 11.26 2.795 15.31-.592 8.274-7.508 14.83-15.93 14.83-3.912 0-7.496-1.416-10.276-3.757l-.238-.21zm23.58-4.982c4.01-5.336 1.775-13.965-.085-19.48-1.657 3.453-5.738 6.094-9.262 6.93-3.303.788-6.226.142-9.283 1.318-6.97 2.68-6.86 10.992-3.02 12.86.002 0 .23.124.227.12 0-.002 5.644-1.122 8.764-2.274 4.56-1.684 9.566-5.835 11.213-10.657-.877 5.015-5.182 9.84-9.507 12.056-2.302 1.182-4.092 1.445-7.88 2.756-.464.158-.828.314-.828.314.96-.16 1.917-.212 1.917-.212 5.393-.255 13.807 1.516 17.745-3.73z"></path> </g> </g></svg>
                    <div className='figure-text'>SpringBoot</div>
                    </figure>
                    <figure title='node' className='figura-box'>
                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>node-js</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="Q3_icons" data-name="Q3 icons"> <g> <path d="M42.3,11.8,25.7,2.4a4,4,0,0,0-3.4,0L5.7,11.8A3.4,3.4,0,0,0,4,14.7V33.3a3.4,3.4,0,0,0,1.7,2.9l4.4,2.5a7.2,7.2,0,0,0,3.8,1c3.1,0,4.9-1.9,4.9-5.1V16.3a.5.5,0,0,0-.5-.5H16.2a.5.5,0,0,0-.5.5V34.6c0,1.5-1.5,2.9-3.9,1.7L7.2,33.7a.5.5,0,0,1-.2-.4V14.7a.8.8,0,0,1,.2-.5L23.7,4.9h.6l16.5,9.3a.8.8,0,0,1,.2.5V33.3a.5.5,0,0,1-.2.4L24.3,43a.6.6,0,0,1-.6,0l-4.2-2.4a.3.3,0,0,0-.4,0l-2.5,1.1c-.3.1-.7.2.1.7l5.6,3.1a3.1,3.1,0,0,0,3.4,0l16.6-9.3A3.4,3.4,0,0,0,44,33.3V14.7A3.4,3.4,0,0,0,42.3,11.8Z"></path> <path d="M29.1,30.3c-4.4,0-5.3-1-5.7-3.1a.4.4,0,0,0-.4-.4H20.8a.4.4,0,0,0-.4.4c0,2.7,1.5,6,8.7,6,5.2,0,8.2-2,8.2-5.5s-2.4-4.5-7.5-5.1-5.6-1-5.6-2.2.4-2.2,4.2-2.2,4.7.7,5.2,2.9a.5.5,0,0,0,.5.4h2.1l.4-.2a.4.4,0,0,0,.1-.3c-.3-3.9-3-5.7-8.3-5.7s-7.5,2-7.5,5.2,2.8,4.5,7.3,5,5.9,1.2,5.9,2.3S32.6,30.3,29.1,30.3Z"></path> </g> </g> </g> </g></svg>
                    <div className='figure-text'>Node Js</div>
                    </figure>

                </div>
            </section>
            <hr className='hr-skills'/>
            <footer className='footer-container'>
                <p className='from'>from</p> 
                <h3 className='pais'>Argentina</h3>
                <p className='footer-p'>
                Hecho por Pedro Agustin Sanchez con <strong>React</strong>, Vite, Javascript, HTML, Css y mucho <div className='love'><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#e2dfdf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>.
                 Desplegado en 
                GitHub Pages. <br/>
                {`"`}Si se puede <strong>imaginar</strong> se puede <strong>programar</strong>{`"`}.
                </p>
            </footer>
        </div>
    </div>
  )
}
