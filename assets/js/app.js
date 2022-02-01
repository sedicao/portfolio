class Modal {
    static toggleModal() {
        modal.style.display = modal.style.display == 'flex' ? 'none' : 'flex'
    }

    static handleURL() {
        const redirect = window.location.hash;
        const keys = {
            por_cheque_mate: 'album7',
            amor_fati: 'album6',
            plebiscito_letal: 'album5',
            justica_medieval: 'album4',
            faraos_fazem_festas: 'album3',
            quebra_politica: 'album2',
            em_combate: 'album1',
            sedicao: 'profile'
        }
        const product = keys[redirect?.replace('#', '')] ?? 'profile'

        this.streaming(product);
    }

    static streaming(product) {
        const products = {
            profile: {
                title: 'Sedição',
                cover: 'https://yt3.ggpht.com/ytc/AKedOLRU4_Eecd4XaS0yjrpyN43h24P5mlNLx4cVJanoRQ=s176-c-k-c0x00ffffff-no-rj',
                youtube: 'https://www.youtube.com/c/SediçãoRAP?sub_confirmation=1',
                spotify: 'https://open.spotify.com/artist/7aGnJ2YGswxW8UdixHbcP3',
                apple: 'https://music.apple.com/us/artist/sedicao/1471144048',
                deezer: 'https://www.deezer.com/br/artist/12822487',
                amazon: 'https://music.amazon.com.br/artists/B07TWJ98HW/sedição',
                tidal: 'https://listen.tidal.com/artist/16181550',
            },
            album6: {
                title: 'Por Cheque, Mate!',
                cover: './assets/img/album-7.jpeg',
                youtube: 'https://www.youtube.com/watch?v=axAqPa3-2po',
                spotify: 'https://open.spotify.com/album/5DNvjPzpROiEKQcEjN9dTL',
                apple: 'https://music.apple.com/br/album/por-cheque-mate-single/1603639410',
                deezer: 'https://www.deezer.com/br/album/285560652',
                amazon: 'https://music.amazon.com/albums/B09PVLKYJK',
                tidal: 'https://tidal.com/browse/album/211483519',
            },
            album6: {
                title: 'Amor Fati',
                cover: './assets/img/album-6.jpeg',
                youtube: 'https://www.youtube.com/watch?v=S7q4Vdu0TlA&list=OLAK5uy_mcOyGUii9-yVZ00iOagjzQ6fa5keriLEY',
                spotify: 'https://open.spotify.com/album/2zCBWSDsIYw3zirPF6hjRa',
                apple: 'https://music.apple.com/br/album/amor-fati-single/1591751540?l=en',
                deezer: 'https://www.deezer.com/br/album/267732532',
                amazon: 'https://music.amazon.com.br/albums/B09K5WLYT2',
                tidal: 'https://listen.tidal.com/album/202302905',
            },
            album5: {
                title: 'Plebiscito Letal',
                cover: './assets/img/album-5.jpeg',
                youtube: 'https://www.youtube.com/watch?v=fZ9cD7dprUA&list=OLAK5uy_nqWXjF9exmD3uGH0Q1YNG36myR3d9H9hg',
                spotify: 'https://open.spotify.com/album/79Fiy6s7qzGZaUOZnmH37u?si=BabIyXxrRFeX5wZUZT-IEA&dl_branch=1',
                apple: 'https://music.apple.com/us/album/plebiscito-letal/1537421460',
                deezer: 'https://www.deezer.com/br/album/182070522',
                amazon: 'https://music.amazon.com.br/albums/B08LYKYRKB',
                tidal: 'https://listen.tidal.com/album/160412209',
            },
            album4: {
                title: 'Justiça Medieval',
                cover: './assets/img/album-4.jpeg',
                youtube: 'https://www.youtube.com/watch?v=MgG4YLamp7M&list=OLAK5uy_m5Piv_7kp_u3XHZPhhy-2URX1woJR9kVM',
                spotify: 'https://open.spotify.com/album/5spU8aDa9uYaQiJRdDDiOZ?si=6YYRMT7oTIeNVrg3Vm2oaQ&dl_branch=1',
                apple: 'https://music.apple.com/us/album/justi%C3%A7a-medieval-single/1516362026',
                deezer: 'https://www.deezer.com/br/album/151968102',
                amazon: 'https://music.amazon.com.br/albums/B089GBV9BD',
                tidal: 'https://listen.tidal.com/album/143711609',
            },
            album3: {
                title: 'Faraós Fazem Festas',
                cover: './assets/img/album-3.jpeg',
                youtube: 'https://www.youtube.com/watch?v=PHsscQFT42A&list=OLAK5uy_mnmU2DDI_55kSrGE0he92qE_cDqYJbwQw',
                spotify: 'https://open.spotify.com/album/7frkzErD7pbNeRHr2wiYFi?si=3DodDKOwSgyOZ-Z8_5yizA&dl_branch=1',
                apple: 'https://music.apple.com/us/album/fara%C3%B3s-fazem-festas-single/1471144047',
                deezer: 'https://www.deezer.com/br/album/102324262',
                amazon: 'https://music.amazon.com.br/albums/B07TWJ8L8V',
                tidal: 'https://listen.tidal.com/album/112585449',
            },
            album2: {
                title: 'Quebra Política',
                cover: './assets/img/album-2.jpeg',
                youtube: 'https://www.youtube.com/watch?v=grn_i3XfzoA&list=OLAK5uy_l9-k99D0g5Gm-Zj3GWloMzIigUhMrDp6o',
                spotify: 'https://open.spotify.com/album/4fvdQgDV20sdVUuZNVP7Qz?si=xqDfsmWWT0mxmEsDQUZOfQ&dl_branch=1',
                apple: 'https://music.apple.com/us/album/quebra-pol%C3%ADtica-single/1471528706',
                deezer: 'https://www.deezer.com/br/album/102590432',
                amazon: 'https://music.amazon.com.br/albums/B07TZ12Q6Y',
                tidal: 'https://listen.tidal.com/album/112711734',
            },
            album1: {
                title: 'Em Combate',
                cover: './assets/img/album-1.jpeg',
                youtube: 'https://www.youtube.com/watch?v=kVMoHhR-zjw',
                spotify: 'https://open.spotify.com/album/3YyBmsz6iIn1MdQKRmxTrz?si=eGb9T9kzQ4GQttFXbyLMGA&dl_branch=1',
                apple: 'https://music.apple.com/us/artist/sedicao/1471144048',
                deezer: 'https://www.deezer.com/br/album/44757101',
                amazon: 'https://music.amazon.com.br/artists/B07TWJ98HW/sedição',
                tidal: 'https://listen.tidal.com/artist/16181550',
            },
        };

        const service = product;

        streaming_youtube.href = products[service].youtube;
        streaming_spotify.href = products[service].spotify;
        streaming_apple.href = products[service].apple;
        streaming_deezer.href = products[service].deezer;
        streaming_amazon.href = products[service].amazon;
        streaming_tidal.href = products[service].tidal;
        service_title.innerHTML = products[service].title;
        service_cover.src = products[service].cover;

        this.toggleModal();
    }
}

window.onload = () => {
    Modal.handleURL();
}