import { useState } from 'react';

function Footer() {
    const [surprise, setSurprise] = useState('');

    function handleClick(name :string) {
        console.log('hello ' + name);
        setSurprise('hello to cat world');
    }

    return ( 
        <div className="Footer">
            <div className="Left">
                <button onClick={() => handleClick('kitten')}>uwu</button>
            </div>
            <div className='Middle'>{surprise}</div>
            <div className="Right">Made by Tassenkatze</div>
        </div>
     );
}

export default Footer;