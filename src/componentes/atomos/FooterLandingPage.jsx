import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Twitter from '../../assets/images/IconoTwitter.png';
import WhatsApp from '../../assets/images/IconoWhatsApp.png';
import Gmail from '../../assets/images/IconoGmail.png';
import Facebook from '../../assets/images/IconoFacebook.png';
import Instagram from '../../assets/images/IconoInstagram.png';
import PayPal from '../../assets/images/IconoPayPal.png';
import Visa from '../../assets/images/IconoVisa.png';
import LogoFooter from '../../assets/images/JasaiArtWhite.png';
import '../../assets/styles/FooterLandingPage.css';

function FooterLandingPage() {
    const [email, setEmail] = useState('');

    useEffect(() => {
        emailjs.init('hNiHpHrs5k26trf0_'); // Inicializa EmailJS con tu Public Key
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            desde_nombre: 'Nombre del remitente', // Puedes cambiar esto a tu gusto
            para_nombre: 'Nombre del destinatario', // Puedes cambiar esto a tu gusto
            correo_email_usuario: email,
            mensaje: 'Bienvenido a nuestro sitio. ¡Gracias por suscribirte!',
        };

        emailjs.send('service_cdtuz4g', 'template_zfd2rpw', templateParams)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('¡Correo enviado exitosamente!');
            }, (err) => {
                console.log('FAILED...', err);
                alert('Error al enviar el correo.');
            });
    };

    return (
        <footer>
            <div className='redesSociales'>
                <p>Síganos</p>
                <img src={Facebook} className="logosRedesIconos"/>
                <img src={Instagram} className="logosRedesIconos"/>
                <img src={Twitter} className="logosRedesIconos"/>
            </div>
            <form id="subscription-form" onSubmit={sendEmail}>
                <input 
                    type="email" 
                    name="correo_email_usuario" 
                    placeholder='Regístrate para recibir actualizaciones sobre nuestras últimas innovaciones' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input type="hidden" name="desde_nombre" value="Nombre del remitente" />
                <input type="hidden" name="para_nombre" value="Nombre del destinatario" />
                <input type="hidden" name="mensaje" value="Bienvenido a nuestro sitio. ¡Gracias por suscribirte!" />
                <button type="submit">Inscribirse</button>
            </form>
            <p>Acepto los términos y condiciones de Google y reconozco que mi información se utilizará de acuerdo con la política de privacidad de Google</p>
        </footer>
    );
}

export default FooterLandingPage;
