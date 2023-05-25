// togglr icon navbar

//scroll sections
window.onscroll = () => {
    let header = document.queryselector('header');

    header.classlist.toggle('sticky', window.scrolly > 100);
}