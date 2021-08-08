import React from 'react'
import "./Widgets.css"

function Widgets() {
    return (
        <div className="widgets">
            <iframe 
            src="https://img.comprating.com/img/internet/593/facebook-tendr-una-plataforma-de-pago-con-su-propia-criptomoneda.jpg" 
            frameborder="0"
            width = "100%"
            height = "100%"
            style = {{border:"none", overflow:"hidden"}}
            scrolling="no"
            allowTransparency="true"
            allow="encrypted-media"
            title ="iframe"
            ></iframe>
        </div>
    )

}

export default Widgets;
