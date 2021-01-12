<?php get_header(); ?>

<div class="outer-wrapper">
  	<div class="wrapper about_wrapper">

<?php

	if ( have_posts() ) {

		while ( have_posts() ) {
			the_post();
			the_content();
			
		}
	}

	?>
	</div>
</div>

<?php get_footer(); 