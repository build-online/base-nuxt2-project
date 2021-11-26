import anime from 'animejs';

const useAnime = function() {
    const onPageEnter = (el) => {
        anime({
            targets: el,
            opacity: [0, 1],
            duration: 2000,
        })
    }

    return {
        onPageEnter
    }
};

export default useAnime;