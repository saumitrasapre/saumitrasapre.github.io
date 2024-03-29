
window.document.onkeydown = function(e) {
	if (!e) {
	  e = event;
	}
	if (e.keyCode == 27) {
	  lightbox_close();
	}
  }
  
  function lightbox_open() {
	var lightBoxVideo = document.getElementById("Un-Real-Gameplay");
	window.scrollTo(0, 0);
	document.getElementById('light').style.display = 'block';
	document.getElementById('fade').style.display = 'block';
	lightBoxVideo.play();
  }
  
  function lightbox_close() {
	var lightBoxVideo = document.getElementById("Un-Real-Gameplay");
	document.getElementById('light').style.display = 'none';
	document.getElementById('fade').style.display = 'none';
	lightBoxVideo.pause();
  }

  function lightbox_open3() {
	var lightBoxVideo = document.getElementById("KitchenChaos-Gameplay");
	window.scrollTo(0, 0);
	document.getElementById('light3').style.display = 'block';
	document.getElementById('fade3').style.display = 'block' ;
	lightBoxVideo.play();
  }
  
  function lightbox_close3() {
	var lightBoxVideo = document.getElementById("KitchenChaos-Gameplay");
	document.getElementById('light3').style.display = 'none';
	document.getElementById('fade3').style.display = 'none';
	lightBoxVideo.pause();
  }

  function lightbox_open4() {
	var lightBoxVideo = document.getElementById("Labyrinthia-Gameplay");
	window.scrollTo(0, 0);
	document.getElementById('light4').style.display = 'block';
	document.getElementById('fade4').style.display = 'block' ;
	lightBoxVideo.play();
  }
  
  function lightbox_close4() {
	var lightBoxVideo = document.getElementById("Labyrinthia-Gameplay");
	document.getElementById('light4').style.display = 'none';
	document.getElementById('fade4').style.display = 'none';
	lightBoxVideo.pause();
  }

  function lightbox_open2() {
	var lightBoxVideo = document.getElementById("Surival-Game-Alpha");
	window.scrollTo(0, 0);
	document.getElementById('light2').style.display = 'block';
	document.getElementById('fade2').style.display = 'block';
	lightBoxVideo.play();
  }
  
  function lightbox_close2() {
	var lightBoxVideo = document.getElementById("Surival-Game-Alpha");
	document.getElementById('light2').style.display = 'none';
	document.getElementById('fade2').style.display = 'none';
	lightBoxVideo.pause();
  }

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$main = $('#main');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav = $('#nav');

		if ($nav.length > 0) {

			// Shrink effect.
				$main
					.scrollex({
						mode: 'top',
						enter: function() {
							$nav.addClass('alt');
						},
						leave: function() {
							$nav.removeClass('alt');
						},
					});

			// Links.
				var $nav_a = $nav.find('a');

				$nav_a
					.scrolly({
						speed: 1000,
						offset: function() { return $nav.height(); }
					})
					.on('click', function() {

						var $this = $(this);

						// External link? Bail.
							if ($this.attr('href').charAt(0) != '#')
								return;

						// Deactivate all links.
							$nav_a
								.removeClass('active')
								.removeClass('active-locked');

						// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
							$this
								.addClass('active')
								.addClass('active-locked');

					})
					.each(function() {

						var	$this = $(this),
							id = $this.attr('href'),
							$section = $(id);

						// No section for this link? Bail.
							if ($section.length < 1)
								return;

						// Scrollex.
							$section.scrollex({
								mode: 'middle',
								initialize: function() {

									// Deactivate section.
										if (browser.canUse('transition'))
											$section.addClass('inactive');

								},
								enter: function() {

									// Activate section.
										$section.removeClass('inactive');

									// No locked links? Deactivate all links and activate this section's one.
										if ($nav_a.filter('.active-locked').length == 0) {

											$nav_a.removeClass('active');
											$this.addClass('active');

										}

									// Otherwise, if this section's link is the one that's locked, unlock it.
										else if ($this.hasClass('active-locked'))
											$this.removeClass('active-locked');

								}
							});

					});

		}

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000
		});

})(jQuery);