import React, { Component }  from 'react';
function Inscription(){
    return (
        <div>
            <h1>Je suis un:</h1>
            <form method="post">
                <input type="submit" value="VIP"/>
            </form>
            <form>
                <input type="submit" value="Gerant"/>
            </form>
        </div>
    );
}

export default Inscription;


