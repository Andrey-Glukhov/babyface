<?php
function babyface_script_enqueue(){
//css
  wp_enqueue_style( 'babyface-stylesheet', get_template_directory_uri() . '/css/babyface.css', array(), '1.0.0', 'all' );
  //wp_enqueue_style( 'jinvertscroll-stylesheet', get_template_directory_uri() . '/css/jInvertScroll.css', array(), '1.0.0', 'all' );
  //js
  // unregister jQuery
  wp_deregister_script('jquery-core');
  wp_deregister_script('jquery');

  // register
  wp_register_script( 'jquery-core', 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', false, null, true );
  wp_register_script( 'jquery', false, array('jquery-core'), null, true );

  // enqueue
  wp_enqueue_script( 'jquery' );
  // Bootstrap
  wp_enqueue_script( 'bootstrap-js', 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js', array('jquery'), null, true );
  // ScrollMagic
  wp_enqueue_script( 'scroll-magic-js', 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.js', array('jquery'), null, true );
  wp_enqueue_script( 'add-indicators-js', 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js', array('jquery', 'scroll-magic-js'), null, true );
  // GSAP
  wp_enqueue_script( 'gsap-js', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.0/gsap.min.js', array('jquery'), null, true );
  wp_enqueue_script( 'gsap-animation-js', 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js', array('jquery', 'gsap-js'), null, true );
  wp_enqueue_script( 'jquery.mousewheel.min-js', get_template_directory_uri() . '/js/jquery.mousewheel.min.js', array('jquery'), null, true );
  wp_enqueue_script( 'babyface-js', get_template_directory_uri() . '/js/babyface.js', array('jquery', 'scroll-magic-js', 'gsap-js', 'bootstrap-js', 'jquery.mousewheel.min-js'), null, true );

}
add_action( 'wp_enqueue_scripts', 'babyface_script_enqueue' );

function babyface_theme_setup(){
  add_theme_support('menus');
  register_nav_menu('primary', 'Primary Header Navigation');

}
add_action('init', 'babyface_theme_setup');
add_theme_support('custom-background');
add_theme_support('custom-header');
add_theme_support('post-formats', array('aside', 'chat', 'gallery','link','image','quote','status','video'));
add_theme_support('post-thumbnails');

function mycustom_embed_defaults($embed_size){
  $embed_size['width'] = 620;
  $embed_size['height'] = 360;
  return $embed_size;
  }
  add_filter('embed_defaults', 'mycustom_embed_defaults');

?>
