const Home = () => (
    <div>
        <button onClick={
            () => {
                fetch('/api/v1/hello').then(res => res.json()).then(json => console.log(json))
            }
        }>Send Message</button>
    </div>
)

export default Home;