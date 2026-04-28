// Capacitor Bridge para funciones nativas
document.addEventListener('deviceready', function() {
    console.log('Capacitor ready');

    // Configurar StatusBar
    if (window.StatusBar) {
        StatusBar.setBackgroundColor({color: '#0F6E56'});
        StatusBar.setStyle({style: 'light'});
    }

    // Ocultar SplashScreen después de carga
    if (window.SplashScreen) {
        setTimeout(function() {
            SplashScreen.hide();
        }, 2000);
    }
}, false);

// Funciones de utilidad para la app
window.AppNative = {
    // Vibrar al guardar registro
    vibrar: function() {
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    },

    // Compartir vía WhatsApp nativo
    compartirWhatsApp: function(mensaje, telefono) {
        var url = 'whatsapp://send?phone=' + telefono + '&text=' + encodeURIComponent(mensaje);
        window.open(url, '_system');
    },

    // Verificar conexión
    hayInternet: function() {
        return navigator.onLine;
    },

    // Mostrar toast nativo (simulado)
    toast: function(mensaje) {
        // Usar el toast existente de la app
        if (typeof showToast === 'function') {
            showToast(mensaje);
        }
    }
};
