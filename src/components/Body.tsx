function Body() {

    function handleClick(name :string) {
        console.log('hello ' + name);
    }

    return ( 
        <div className="Content">
            <p>body</p>
            <button onClick={() => handleClick('kitten')}>uwu</button>
        </div>
     );
}

export default Body;