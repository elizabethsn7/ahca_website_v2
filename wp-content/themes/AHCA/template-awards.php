<?php
/**
 * Template Name: Awards Page
 */
?>
<div id="page3master">
    <div class="row" id="firstrow">
        <div class="col-sm-4 col-md-5 col-lg-6" id="titleBlock">
            <h1 class="text-center">House Beautiful Awards<br>Recipients</h1>
            <ul>
                <?php if (have_rows('house_images_2011')):?>
                    <li class="yrBtnHa">2011</li>
                <?php endif;?>
                <?php if (have_rows('house_images_2013')):?>
                    <li class="yrBtnHa">2013</li>
                <?php endif;?>
                <?php if (have_rows('house_images_2015')):?>
                    <li class="yrBtnHa">2015</li>
                <?php endif;?>
            </ul>
        </div>
    
        <div class="col-sm-8 col-md-7 col-lg-6 floatright">
            <!-- Wrapper for slides -->
            <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="8000">
                <div class="carousel-inner myCarousel" role="listbox">

                    <!-- slideshow for 2015 -->
                    <?php if (have_rows('house_images_2015')): 
                          while (have_rows('house_images_2015')): 
                          the_row(); 
                    ?>
                        <div class="item img2015">
                            <img class="img-responsive" src="<?php the_sub_field('house_img'); ?>">
                        </div>
                    <?php endwhile; endif; ?>

                    <!-- slideshow for 2013 -->
                    <?php if (have_rows('house_images_2013')): 
                          while (have_rows('house_images_2013')): 
                          the_row(); 
                    ?>
                        <div class="item img2013">
                            <img src="<?php the_sub_field('house_img'); ?>">
                        </div>
                    <?php endwhile; endif; ?>

                    <!-- slideshow for 2011 -->
                    <?php if (have_rows('house_images_2011')): 
                          while (have_rows('house_images_2011')): 
                          the_row(); 
                    ?>
                        <div class="item img2011 hidden">
                            <img src="<?php the_sub_field('house_img'); ?>">
                        </div>
                    <?php endwhile; endif; ?>


                </div>
            </div>


            <!-- Left and right controls -->
            <?php if (have_rows('house_images_2015') or have_rows('house_images_2013') or have_rows('house_images_2011')): ?>
                <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            <?php else: ?>
                <h3 class="text-center errorMessage">No Houses Available</h3>
            <?php endif; ?>


        </div>
    </div>
    <div class="row" id="secondrow">
        <img class="center-block" src="<?php bloginfo('template_directory');?>/dist/images/houseAward.png">
        <h3 class="text-center">ABOUT THE HOUSE BEAUTIFUL AWARDS</h3>
        <p class="text-center">The House Beautiful Awards created in 2011 and first given in that year were established as a biannual event to recognize the outstanding effort of homeowners who maintain their overall property thereby enhancing the quality of life in Archer Heights and increasing the desirability of homes and buildings in our community. 
        </p>
        <button class="center-block buttonstyle"><a href="<?php bloginfo('template_directory');?>/dist/images/committeesPDF/Content - House Beautiful Awards.pdf" target="_blank">Read Full Docs</a></button>
    </div>
    <div class="row" id="thirdrow">
        
        <div class="col-sm-4 col-md-5 col-lg-5 visible-xs">
            <h1 class="text-center">Junior Citizens Awards</h1>
            <h2 class="text-center">2014</h2>
        </div>
        
        <!-- slideshow JCA -->
        <div class="col-sm-8 col-md-7 col-lg-6 floatright">
            <div id="myCarousel2" class="carousel slide" data-ride="carousel" data-interval="8000">
                
                <!-- Wrapper for slides -->
                <div class="carousel-inner" role="listbox">
                    <div class="item active">
                        <img src="<?php bloginfo('template_directory');?>/dist/images/Junior Citizens Award/DSC03590.JPG" alt="A generic square placeholder image with rounded corners in a figure.">
                        <div class="captionpadding">
                            <caption>Juan Carlos Paez, Parents – Juan & Elizabeth</caption>
                        </div>
                    </div>
                
                    <div class="item">
                        <img src="<?php bloginfo('template_directory');?>/dist/images/Junior Citizens Award/DSC03593.JPG">
                        <div class="captionpadding">
                            <caption>Rene Valtierra, Parents – Rene Valtierra & Lorraine Sandoval</caption>
                        </div>
                    </div>
                
                    <div class="item">
                        <img src="<?php bloginfo('template_directory');?>/dist/images/Junior Citizens Award/DSC03594.JPG">
                        <div class="captionpadding">
                            <caption>Javiar Rosado, Parents – Javiar & Elizabeth</caption>
                        </div>
                    </div>
                
                    <div class="item">
                        <img src="<?php bloginfo('template_directory');?>/dist/images/Junior Citizens Award/DSC03597.JPG">
                        <div class="captionpadding">
                            <caption>Alicia Pimentel, Parents - Nancy & Carmelo Pimentel</caption>
                        </div>
                    </div>
                    
                    <div class="item">
                        <img src="<?php bloginfo('template_directory');?>/dist/images/Junior Citizens Award/DSC03599.JPG">
                        <div class="captionpadding">
                            <caption>Adrian Ortiz, Parents - Oscar & Imelda Buzo</caption>
                        </div>
                    </div>
                    <div class="item">
                        <img src="<?php bloginfo('template_directory');?>/dist/images/Junior Citizens Award/DSC03601.JPG">
                        <div class="captionpadding">
                            <caption>2014 JCA Recipients Group Photo</caption>
                        </div>
                    </div>
                </div>
            </div>
    
            <!-- Left and right controls -->
            <a class="left carousel-control" href="#myCarousel2" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel2" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <!-- end of JCA slideshow  -->

        <div class="col-sm-4 col-md-5 col-lg-6 hidden-xs" id="floatright">
            <h1 class="text-center">Junior Citizens Awards</h1>
            <h2 class="text-center">2014</h2>
        </div>
    </div>
    <div class="row" id="fourthrow">
        
        <h3 class="text-center">ABOUT THE JUNIOR CITIZENS AWARDS</h3>

        <p class="text-center">The Archer Heights Civic Association Junior Citizens Award was established in 1979 to recognize the outstanding school spirit and civic participation of one student of the graduating class at each of the five grammar schools in our community.  This award, consisting of a certificate of merit and cash award of $100, is presented to a student who is actively involved in the greater community of Archer Heights which carries forward to include the schools and churches in our community.  The recipient is selected at the discretion of the school principal and faculty in consultation with the President of the Archer Heights Civic Association.  The awards are presented at the graduation ceremony, luncheon or school assembly.
        </p>
    </div>
</div>