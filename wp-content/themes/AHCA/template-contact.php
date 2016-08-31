<?php
/**
 * Template Name: Contact Page
 */
?>
<div id="page6master">
    <div class="row">
        <div class="visible-xs text-center imgCont col-xs-12">
            <img class="center-block" src="<?php bloginfo('template_directory');?>/dist/images/mapWithMarker.jpg">
            <label class="labelinfo firstLabel">Address: 4444 S. Pulaski Rd. 2nd flr. Chicago, IL 60632</label><br>
            <label class="labelinfo">Phone Number: (773) 843-2232</label>
        </div> 
        <div class="col-sm-6" id="formCont">
            <h1 class="text-center">CONTACT FORM</h1>
            
                <?php echo do_shortcode( '[wpforms id="54"]' ); ?>
                <!--<form>-->
                <!--    <input placeholder=" Full Name" type="text" name="fullname">-->
                <!--    <input placeholder=" Email" type="text" name="email">-->
                <!--    <input placeholder=" Subject" type="text" name="Subject">-->
                <!--    <textarea placeholder=" Message"></textarea>-->
                <!--    <h6 class="text-center">Your inquiry, comments or suggestions are important to us. But please understand that we are an all volunteer community group and do not maintain a full time office staff. We will contact you as soon as possible.</h6>-->
                <!--    <button type="submit" value="Submit" id="submitButton">Submit</button>-->
                <!--</form>-->
            
        </div>
        <div class="col-sm-6 hidden-xs text-center imgCont">
            <img class="center-block" src="<?php bloginfo('template_directory');?>/dist/images/mapWithMarker.jpg">
            <label class="labelinfo firstLabel">Address: 4444 S. Pulaski Rd. 2nd flr. Chicago, IL 60632</label><br>
            <label class="labelinfo">Phone Number: (773) 843-2232</label>
        </div> 
    </div>
</div>