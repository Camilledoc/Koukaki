<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

	<header id="masthead" class="site-header">

    
		<nav id="site-navigation" class="main-navigation">
        <div class="menu">
                <a class="site-title" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
            </div>
            <button class="toggle">
            <a href="#fullscreenmenu"></a>
            <span></span>
            </button>
            <ul id="fullscreenmenu">
            <img class="logo-mini" src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
                <li><a href="#story">Histoire</a></li>
                <li><a href="#characters">Personnages</a></li>
                <li><a href="#place">Lieu</a></li>
                <li><a href="#studio">Studio Koukaki</a></li>
                <p> STUDIO KOUKAKI</p>
                <img class="cat" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/menu/cat.png'; ?> " alt="tête de chat animée violet">
                <img class="cat-1"src="<?php echo get_stylesheet_directory_uri() . '/assets/images/menu/cat-1.png'; ?> " alt="tête de chat animée orange">
                <img class="cat-2"src="<?php echo get_stylesheet_directory_uri() . '/assets/images/menu/cat-2.png'; ?> " alt="tête de chat animée noir">
                <img class="flower" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/menu/Flower.png'; ?> " alt="fleur points orange">
                <img class="flower-1" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/menu/hibiscus_footer.png'; ?> " alt="hibiscus orange">
                <img class="flower-2" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/menu/orchid.png'; ?> " alt="orchidée violette">
                <img class="flower-3" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/menu/random_flower.png'; ?> " alt="fleur rose">
                <img class="flower-4" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/menu/Sunflower.png'; ?> " alt="Fleur blanche">
            </ul>
           
            
		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->
