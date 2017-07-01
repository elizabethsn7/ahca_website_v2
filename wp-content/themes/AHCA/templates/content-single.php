<?php while (have_posts()) : the_post(); ?>
  <div class="container">
    <article <?php post_class(); ?>>
      <header>
        <h1 class="entry-title"><?php the_title(); ?></h1>
        <?= the_post_thumbnail('medium', ['class' => 'img-responsive']);?>
        <?php get_template_part('templates/entry-meta'); ?>
      </header>
      <div class="entry-content">
        <?php the_content(); ?>
      </div>
    </article>
  </div>
<?php endwhile; ?>
