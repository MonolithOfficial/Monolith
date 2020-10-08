import React, { Component } from 'react';
// import Loader from 'react-loader-spinner';
// import '../swiper/swiper.css'
// import '../swiper/components/navigation/navigation.css';
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';

class Home extends Component {
    
    // const iframeChildOne = 
    //         <iframe style={{border: "0", width: "100%", height: "120px"}} 
    //     src="https://bandcamp.com/EmbeddedPlayer/track=1169101583/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/" seamless>
    //     <a href="https://monolithworldline.bandcamp.com/track/cryptics">Cryptics by Monolith</a></iframe>

    // const d_fade_1 = iframeChildOne ? (

    //     <li>{iframeChildOne[1]}</li>

    // ) :
    // (
    //     <h1>Please stand by..</h1>
    // )
    
    componentDidMount(){
        const iframeChildOne = document.getElementById('1')
        const iframeHolder = document.getElementById('iframe-holder')

        iframeChildOne.addEventListener("load", function() {
            // document.getElementsByClassName('loader')[0].style.display = "none"
            iframeHolder.classList.add('fade-in')
            iframeHolder.style.opacity = "1"
        });
    }

    // for (let elem of iframeChildOne) {
    //     console.log(elem)
    // }

    render() {
        return (
            <div id="Home" className="fade-in">
                <h1 className="pageTitle">Monolith</h1>
                {/* <div id="home_holder">
                    <img className="vinyl spin" src={vinyl_wd}/>
                </div> */}
                <div id="iframe-holder" className="newest-tracks-container">
                    {/* <Loader className="loader" type="Watch" color="#787878" height="100" width="100" style={{}}/> */}
                    <ul>
                    {/* {d_fade_1} */}
                    <li id="d-fade-1"><iframe title="1" id="1" style={{border: "0", width: "100%", height: "120px"}} 
                        src="https://bandcamp.com/EmbeddedPlayer/track=1169101583/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/" seamless>
                    <a href="https://monolithworldline.bandcamp.com/track/cryptics">Cryptics by Monolith</a></iframe></li>
    
                    <li className="d-fade-2"><iframe title="2" style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/track=1129829295/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/" seamless>
                        <a href="https://monolithworldline.bandcamp.com/track/duel">Duel by Monolith</a></iframe></li>
    
    
                    <li className="d-fade-3"><iframe title="3" style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/track=1270978472/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/" seamless>
                        <a href="https://monolithworldline.bandcamp.com/track/the-elite-party">The Elite Party by Monolith</a></iframe></li>
                   
                    </ul>
                    
                </div>
            </div>
        )
    }
    
}

export default Home
