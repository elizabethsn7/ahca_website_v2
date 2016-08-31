<?php
/**
 * Template Name: Events Page
 */
?>
<div id="page5Master" >
    <div class="container">
        <!--two tab row -->
        <div class="row text-right" id="tabRow">
            <div class="activeBtn text-center" id="upcomingBtn">
                <h4>UPCOMING EVENTS</h4>
            </div>
            
            <div class="deactiveBtn text-center" id="pastBtn">
                <h4>PAST EVENTS</h4>
            </div>
            
        </div>
        
        <div id="eventsContainer">
        <!--UPCOMING EVENTS -->
            
            <?php if(have_rows('add_upcoming_event')): 
                //get number of events via while loop & store in $totalPEvents
                $totalUEvents = 0;
                while( have_rows('add_upcoming_event') ) : the_row();
					$totalUEvents++;
				endwhile;
				//iterate IF it is even
				if ($totalUEvents % 2 == 0 ):
				    while( have_rows('add_upcoming_event') ) : the_row();
            ?>
            <div class="eventsRow row upcomingRow">
                <div class="col-sm-6 eventPost">
                    <img src=<?php the_sub_field('event_image'); ?> class="img-responsive">
                    <h3><?php the_sub_field('event_title'); ?></h3>
                    <ul>
                        <li>Date: <?php the_sub_field('event_date'); ?></li>
                        <li>Time: <?php the_sub_field('event_time'); ?></li>
                        <li>Price: <?php the_sub_field('event_price'); ?></li>
                        <li>Description: <?php the_sub_field('event_description'); ?></li>
                    </ul>
                </div>
                <?php the_row(); ?>
                <div class="col-sm-6 eventPost">
                    <img src=<?php the_sub_field('event_image'); ?> class="img-responsive">
                    <h3><?php the_sub_field('event_title'); ?></h3>
                    <ul>
                        <li>Date: <?php the_sub_field('event_date'); ?></li>
                        <li>Time: <?php the_sub_field('event_time'); ?></li>
                        <li>Price: <?php the_sub_field('event_price'); ?></li>
                        <li>Description: <?php the_sub_field('event_description'); ?></li>
                    </ul>
                </div>
            </div>
            <?php endwhile; else: while(have_rows('add_upcoming_event') && $totalUEvents != 1): 
                $totalUEvents --;
                the_row() 
            ?>
            <div class="eventsRow row upcomingRow">
                <div class="col-sm-6 eventPost">
                    <img src=<?php the_sub_field('event_image'); ?> class="img-responsive">
                    <h3><?php the_sub_field('event_title'); ?></h3>
                    <ul>
                        <li>Date: <?php the_sub_field('event_date'); ?></li>
                        <li>Time: <?php the_sub_field('event_time'); ?></li>
                        <li>Price: <?php the_sub_field('event_price'); ?></li>
                        <li>Description: <?php the_sub_field('event_description'); ?></li>
                    </ul>
                </div>
                <?php 
                    $totalUEvents --;
                    the_row() 
                ?>
                <div class="col-sm-6 eventPost">
                    <img src=<?php the_sub_field('event_image'); ?> class="img-responsive">
                    <h3><?php the_sub_field('event_title'); ?></h3>
                    <ul>
                        <li>Date: <?php the_sub_field('event_date'); ?></li>
                        <li>Time: <?php the_sub_field('event_time'); ?></li>
                        <li>Price: <?php the_sub_field('event_price'); ?></li>
                        <li>Description: <?php the_sub_field('event_description'); ?></li>
                    </ul>
                </div>
            </div>
            <?php endwhile; the_row(); ?>
            <div class="eventsRow row upcomingRow">
                <div class="col-sm-6 eventPost">
                    <img src=<?php the_sub_field('event_image'); ?> class="img-responsive">
                    <h3><?php the_sub_field('event_title'); ?></h3>
                    <ul>
                        <li>Date: <?php the_sub_field('event_date'); ?></li>
                        <li>Time: <?php the_sub_field('event_time'); ?></li>
                        <li>Price: <?php the_sub_field('event_price'); ?></li>
                        <li>Description: <?php the_sub_field('event_description'); ?></li>
                    </ul>
                </div>
            </div>
            <?php endif; else: ?>
            <div class="eventsRow row upcomingRow">
                <h4 class="text-center noEvents">No Upcoming Events At This Moment. Please Check At A Later Day</h4>
            </div>
            <?php endif; ?>
            
             
        <!--PAST EVENTS !!!!-->
            
            
            <?php if(have_rows('add_past_event')): 
                //get number of events via while loop & store in $totalPEvents
                $totalPEvents = 0;
                while( have_rows('add_past_event') ) : the_row();
					$totalPEvents++;
				endwhile;
				//iterate IF it is even
				if ($totalPEvents % 2 == 0 ):
				    while( have_rows('add_past_event') ) : the_row();
            ?>
            <div class="eventsRow row pastRow deactiveRow">
                <div class="col-sm-6 eventPost">
                    <img src=<?php the_sub_field('event_image'); ?> class="img-responsive">
                    <h3><?php the_sub_field('event_title'); ?></h3>
                    <ul>
                        <li>Date: <?php the_sub_field('event_date'); ?></li>
                        <li>Time: <?php the_sub_field('event_time'); ?></li>
                        <li>Price: <?php the_sub_field('event_price'); ?></li>
                        <li>Description: <?php the_sub_field('event_description'); ?></li>
                    </ul>
                </div>
                <?php the_row(); ?>
                <div class="col-sm-6 eventPost">
                    <img src=<?php the_sub_field('event_image'); ?> class="img-responsive">
                    <h3><?php the_sub_field('event_title'); ?></h3>
                    <ul>
                        <li>Date: <?php the_sub_field('event_date'); ?></li>
                        <li>Time: <?php the_sub_field('event_time'); ?></li>
                        <li>Price: <?php the_sub_field('event_price'); ?></li>
                        <li>Description: <?php the_sub_field('event_description'); ?></li>
                    </ul>
                </div>
            </div>
            <?php endwhile; else: while(have_rows('add_past_event') && $totalPEvents != 1): 
                $totalPEvents --;
                the_row() 
            ?>
            <div class="eventsRow row pastRow deactiveRow">
                <div class="col-sm-6 eventPost">
                    <img src=<?php the_sub_field('event_image'); ?> class="img-responsive">
                    <h3><?php the_sub_field('event_title'); ?></h3>
                    <ul>
                        <li>Date: <?php the_sub_field('event_date'); ?></li>
                        <li>Time: <?php the_sub_field('event_time'); ?></li>
                        <li>Price: <?php the_sub_field('event_price'); ?></li>
                        <li>Description: <?php the_sub_field('event_description'); ?></li>
                    </ul>
                </div>
                <?php 
                    $totalPEvents --;
                    the_row() 
                ?>
                <div class="col-sm-6 eventPost">
                    <img src=<?php the_sub_field('event_image'); ?> class="img-responsive">
                    <h3><?php the_sub_field('event_title'); ?></h3>
                    <ul>
                        <li>Date: <?php the_sub_field('event_date'); ?></li>
                        <li>Time: <?php the_sub_field('event_time'); ?></li>
                        <li>Price: <?php the_sub_field('event_price'); ?></li>
                        <li>Description: <?php the_sub_field('event_description'); ?></li>
                    </ul>
                </div>
            </div>
            <?php endwhile; the_row(); ?>
            <div class="eventsRow row pastRow deactiveRow">
                <div class="col-sm-6 eventPost">
                    <img src=<?php the_sub_field('event_image'); ?> class="img-responsive">
                    <h3><?php the_sub_field('event_title'); ?></h3>
                    <ul>
                        <li>Date: <?php the_sub_field('event_date'); ?></li>
                        <li>Time: <?php the_sub_field('event_time'); ?></li>
                        <li>Price: <?php the_sub_field('event_price'); ?></li>
                        <li>Description: <?php the_sub_field('event_description'); ?></li>
                    </ul>
                </div>
            </div>
            <?php endif; else: ?>
            <div class="eventsRow row pastRow deactiveRow">
                <h4 class="text-center noEvents">No Past Events At This Moment. Please Check At A Later Day</h4>
            </div>
            <?php endif; ?>
            
            
            
            
            
        </div>
        
        
    </div>
</div>