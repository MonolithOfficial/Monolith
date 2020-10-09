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
        const iframeChildOne = document.getElementById('wr_frame')
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
            <div id="Home">
                <div id="iframe-holder">
                    <iframe id="wr_frame" title="Worldline;Dead" className="worldline-player" style={{border: "0", width: "100%", height: "100%"}}
                    src="https://bandcamp.com/EmbeddedPlayer/album=428901443/size=large/bgcol=333333/linkcol=ffffff/artwork=small/transparent=true/" seamless="seamless">
                    <a href="https://monolithworldline.bandcamp.com/album/worldline-dead">Worldline;Dead by Monolith</a></iframe>
                </div>

                
            </div>
        )
    }
    
}

export default Home
