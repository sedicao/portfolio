class Modal {
    static toggleModal() {
        modal.style.display = modal.style.display == 'flex' ? 'none' : 'flex'
    }

    static streaming(product) {
        const products = {
            profile: {
                title: 'Sedição',
                youtube: 'https://www.youtube.com/c/SediçãoRAP?sub_confirmation=1',
                spotify: 'https://open.spotify.com/artist/7aGnJ2YGswxW8UdixHbcP3',
                apple: 'https://music.apple.com/us/artist/sedicao/1471144048',
                deezer: 'https://www.deezer.com/br/artist/12822487',
                amazon: 'https://music.amazon.com.br/artists/B07TWJ98HW/sedição',
                tidal: 'https://listen.tidal.com/artist/16181550',
            },
            album5: {
                title: 'Plebiscito Letal',
                youtube: 'https://www.youtube.com/watch?v=fZ9cD7dprUA&list=OLAK5uy_nqWXjF9exmD3uGH0Q1YNG36myR3d9H9hg',
                spotify: 'https://open.spotify.com/album/79Fiy6s7qzGZaUOZnmH37u?si=BabIyXxrRFeX5wZUZT-IEA&dl_branch=1',
                apple: 'https://music.apple.com/us/album/plebiscito-letal/1537421460',
                deezer: 'https://www.deezer.com/br/album/182070522',
                amazon: 'https://music.amazon.com.br/albums/B08LYKYRKB',
                tidal: 'https://listen.tidal.com/album/160412209',
            },
            album4: {
                title: 'Justiça Medieval',
                youtube: 'https://www.youtube.com/watch?v=MgG4YLamp7M&list=OLAK5uy_m5Piv_7kp_u3XHZPhhy-2URX1woJR9kVM',
                spotify: 'https://open.spotify.com/album/5spU8aDa9uYaQiJRdDDiOZ?si=6YYRMT7oTIeNVrg3Vm2oaQ&dl_branch=1',
                apple: 'https://music.apple.com/us/album/justi%C3%A7a-medieval-single/1516362026',
                deezer: 'https://www.deezer.com/br/album/151968102',
                amazon: 'https://music.amazon.com.br/albums/B089GBV9BD',
                tidal: 'https://listen.tidal.com/album/143711609',
            },
            album3: {
                title: 'Faraós Fazem Festas',
                youtube: 'https://www.youtube.com/watch?v=PHsscQFT42A&list=OLAK5uy_mnmU2DDI_55kSrGE0he92qE_cDqYJbwQw',
                spotify: 'https://open.spotify.com/album/7frkzErD7pbNeRHr2wiYFi?si=3DodDKOwSgyOZ-Z8_5yizA&dl_branch=1',
                apple: 'https://music.apple.com/us/album/fara%C3%B3s-fazem-festas-single/1471144047',
                deezer: 'https://www.deezer.com/br/album/102324262',
                amazon: 'https://music.amazon.com.br/albums/B07TWJ8L8V',
                tidal: 'https://listen.tidal.com/album/112585449',
            },
            album2: {
                title: 'Quebra Política',
                youtube: 'https://www.youtube.com/watch?v=grn_i3XfzoA&list=OLAK5uy_l9-k99D0g5Gm-Zj3GWloMzIigUhMrDp6o',
                spotify: 'https://open.spotify.com/album/4fvdQgDV20sdVUuZNVP7Qz?si=xqDfsmWWT0mxmEsDQUZOfQ&dl_branch=1',
                apple: 'https://music.apple.com/us/album/quebra-pol%C3%ADtica-single/1471528706',
                deezer: 'https://www.deezer.com/br/album/102590432',
                amazon: 'https://music.amazon.com.br/albums/B07TZ12Q6Y',
                tidal: 'https://listen.tidal.com/album/112711734',
            },
            album1: {
                title: 'Em Combate',
                youtube: 'https://www.youtube.com/watch?v=kVMoHhR-zjw',
                spotify: 'https://open.spotify.com/album/3YyBmsz6iIn1MdQKRmxTrz?si=eGb9T9kzQ4GQttFXbyLMGA&dl_branch=1',
                apple: 'https://music.apple.com/us/artist/sedicao/1471144048',
                deezer: 'https://www.deezer.com/br/album/44757101',
                amazon: 'https://music.amazon.com.br/artists/B07TWJ98HW/sedição',
                tidal: 'https://listen.tidal.com/artist/16181550',
            },
        };

        const service = product ?? 'profile';

        streaming_youtube.href = products[service].youtube;
        streaming_spotify.href = products[service].spotify;
        streaming_apple.href = products[service].apple;
        streaming_deezer.href = products[service].deezer;
        streaming_amazon.href = products[service].amazon;
        streaming_tidal.href = products[service].tidal;
        service_title.innerHTML = products[service].title;

        this.toggleModal();
    }
}

window.onload = () => {
    Modal.toggleModal();
}