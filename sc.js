let icon = document.querySelector( '.icon' );
let ul = document.querySelector( '.link' );

icon.addEventListener( 'click', function (e) {

    e.stopPropagation();

    ul.classList.toggle( 'active' );

} );

document.addEventListener( 'click', ( e ) => {

    if ( !icon.contains( e.target ) && !ul.contains( e.target ) ) {
        
        ul.classList.remove( 'active' )
        
    }
})