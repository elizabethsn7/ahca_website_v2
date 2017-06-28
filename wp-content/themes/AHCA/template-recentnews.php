<?php
/*
  Template Name: Recent News Page
  */
  $all_args = array(
    'category' => 'recent-news',
    'order' => 'DESC'
  );
  $latest_args = array(
    'category' => 'recent-news',
    'order' => 'DESC',
    'numberposts' => 1,
  );

  $all_posts = get_posts($all_args);
  $latest_post = get_posts($latest_args);
?>
<div id="newsPage">
  <div class="container">
    <div class="row" id="firstRow">
      <div class="col-xs-12 col-sm-2 impEvents hidden-xs">
        <h3>Important Events</h3>
        <ul>
        <?php
          if ($all_posts):
            foreach ($all_posts as $post):
        ?>
          <li><a href="<?= get_permalink($post->ID); ?>"><?= $post->post_title; ?></a></li>
        <?php
            endforeach;
          else:
        ?>
          <h5>No Recent Posts</h5>
        <?php
          endif;
        ?>
        </ul>
      </div>
      <?php
        if ($latest_post):
          foreach ($latest_post as $post):
      ?>
      <div class="col-sm-4">
          <?= the_post_thumbnail('full', ['class' => 'img-responsive']);?>
      </div>
      <div class="col-sm-6">
          <h1 class="lead"><?= $post->post_title; ?></h1>
          <?php $url = " <a href=" . get_permalink($post->ID) . ">...Read More</a>"?>
          <p class="lead"><?= wp_trim_words( $post->post_content, $num_words = 50, $more = $url); ?></p>
      </div>
      <?php
          endforeach;
        else:
      ?>
      <div class="col-sm-4">
          <img src="<?php bloginfo('template_directory');?>/dist/images/new2.jpg" class="img-responsive">
      </div>
      <div class="col-sm-6">
        <h1 class="lead">Recent News</h1>
        <p class="lead">We are happy to display our new Recent Post page where Archer Heights Civic Association members can read about the latest updates and news. Please check back at a later time to view updates.</p>
      </div>
      <?php
        endif;
      ?>
    </div>

    <div class="row" id="secondRow">
    <?php
      //remove first post
      array_splice($all_posts, 0, 1);
      // remove all posts except first three
      array_splice($all_posts, 3);
      foreach ($all_posts as $post):
    ?>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title"><?= $post->post_title?></h3>
        </div>
        <div class="panel-body">
          <?php $url = " <a href=" . get_permalink($post->ID) . ">...Read More</a>"?>
          <?= wp_trim_words( $post->post_content, $num_words = 50, $more = $url); ?>
        </div>
      </div>
    <?php
      endforeach;
    ?>
    </div>
  </div>
</div>
