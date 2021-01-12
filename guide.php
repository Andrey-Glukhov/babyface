<?php
/**
*Template Name: Guide Page
*/
get_header();

$args = array(
    'post_type' => 'artists',
    'post_status' => 'publish',
    'order' => 'ASC',
    'posts_per_page' => -1
 );?>
  <ul id="accordion">
  <?php $artists = new WP_Query( $args );
  if($artists->have_posts() ) : while ( $artists->have_posts() ) : $artists->the_post();?>
    <li>
      <div class="acc_header"><?php the_title(); ?> </div>
     <?php $image = get_field('colophon_image');
    //echo $image;
     // if( $image ) {
          echo '<div class="acc_content"><img src="' . esc_url($image) . '"><a class="post_link" href="' . get_the_permalink() . '"></a></div>';
     // } ?>
    </li>  
  <?php endwhile; ?>
  <?php endif; ?>
</ul>
  <?php wp_reset_postdata();?>

  <?php get_footer(); ?>