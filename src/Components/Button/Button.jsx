import React from 'react';
import "./Button.css"

const colors = {
    Blue: '#1A1446',
    White: '#FFFFFF',
    BlueLigth: '#00D4D8',
    Black: '#333333,',
}

function GetColor(color){
    let colorCss = colors[color] ? colors[color] : "#1A1446";
    return colorCss;
}

function Button({colorBackground, colorText, text, onClick}) {
    return (
        <div>
            <button className='o-button' 
            style={{ 
                backgroundColor: GetColor(colorBackground),
                color: GetColor(colorText),
                borderColor: GetColor(colorBackground) }}>
                {text}
            </button>
        </div>
    );
}

export default Button;