import { useState } from 'react';

function Footer() {
    const [surprise, setSurprise] = useState('');

    function handleClick(name :string) {
        console.log('hello ' + name);
        setSurprise('hello to cat world');
    }

    return ( 
        <div className="Footer">
            {/* adding component and passing props to that child component: hier die handleClick function */}
            <Signature handleClick={handleClick}/>
            <div className='Middle'>{surprise}</div>
            <div className="Right">Made by Tassenkatze</div>
        </div>
     );
}

function Signature(props: any) {
    // übergebene props des parent components können genutzt werden
    return (
        <div className="Left">
            <button onClick={() => props.handleClick('kitten')}>uwu</button>
        </div>
    )
}

export default Footer;