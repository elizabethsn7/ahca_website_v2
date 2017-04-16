<header class="banner">
  <nav class="navbar">
    <div class="container-fluid">
      <img id="siteTitle" src="<?php bloginfo('template_directory');?>/dist/images/siteTitle.png">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle hamButton" data-toggle="collapse" data-target="#myNavbar">
          <img src="<?php bloginfo('template_directory');?>/dist/images/menu.png">
        </button>
        <div id="logoContainer">
          <a href="/">
            <img class="center-block" src="" id="logo">
          </a>
        </div>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav ulMenu">
          <li><a href="/">HOME</a></li>
          <li><a href="/about-page">ABOUT</a></li>
          <li><a href="/awards-page">AWARDS</a></li>
          <li><a href="committees-page">COMMITTEES</a></li> 
          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">EVENTS<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="/group-events-page">GROUP EVENTS</a></li>
              <li><a href="/speakers-page">SPEAKERS</a></li>
            </ul>
          </li>
          <li><a href="recentnews-page">RECENT NEWS</a></li>
          <li><a href="/contact-page">CONTACT US</a></li> 
        </ul>
        <ul class="nav navbar-nav navbar-right" id="memberButtonUl">
            <button><a href="/membership-page">BECOME A MEMBER</a></button>
        </ul>
      </div>
    </div>
  </nav>
</header>
