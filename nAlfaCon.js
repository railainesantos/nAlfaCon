//nAlfaCon 
(function($) {
	
    var self = $.nAlfaCon = new function(){};
	
    $.extend(self, {

    	nAlfaConBackgrounds : [
    		'https://i.imgur.com/vg707KJ.jpg'
    	],

        nAlfaConImgs : [
            'https://i.imgur.com/iSu0w3D.gif',
            'https://i.imgur.com/Jo8cTLu.jpg',
            'https://i.imgur.com/pb0JzbC.jpg',
            'https://i.imgur.com/dG3xTOp.jpg',
            'https://i.imgur.com/pxrBljp.jpg',
            'https://i.imgur.com/QVbetQC.jpg',
            'https://i.imgur.com/0C2IyxS.jpg',
            'https://i.imgur.com/HkmhL3P.jpg',
            'https://i.imgur.com/FnZKUX8.jpg',
            'https://i.imgur.com/C8ixodt.jpg',
            'https://i.imgur.com/a8OgH3G.jpg',
            'https://i.imgur.com/ZwtNX8b.jpg',
            'https://i.imgur.com/KVgp0z1.jpg',
            'https://i.imgur.com/bPkQn14.jpg',
            'https://i.imgur.com/4mtxmId.jpg',
            'https://i.imgur.com/VE1AyDg.jpg',
            'https://i.imgur.com/DwIK9LT.jpg',
            'https://i.imgur.com/86FjjZe.jpg',
            'https://i.imgur.com/3aqcKK1.jpg',
            'https://i.imgur.com/lkRcaYo.jpg',
            'https://i.imgur.com/U2sZhVJ.jpg',
            'https://i.imgur.com/5M5oIev.jpg',
            'https://i.imgur.com/NoPHbFc.jpg',
            'https://i.imgur.com/PzgrpHD.jpg',
            'https://i.imgur.com/KHrlDAM.jpg',
            'https://i.imgur.com/js2Mkyw.jpg',
            'https://i.imgur.com/tA4XR4l.jpg',
            'https://i.imgur.com/qCXJZCT.jpg',
            'https://i.imgur.com/TXiDUw1.jpg',
            'https://i.imgur.com/iGdwcR0.jpg',
            'https://i.imgur.com/LB20ElS.jpg',
            'https://i.imgur.com/aAsgYvL.jpg',
            'https://i.imgur.com/AbyqBno.jpg',
            'https://i.imgur.com/txuj0V8.jpg',
            'https://i.imgur.com/nvJfUml.jpg',
            'https://i.imgur.com/C7wqQVU.jpg',
            'https://i.imgur.com/R9Aoi8f.jpg',
            'https://i.imgur.com/NeDhErG.jpg',
            'https://i.imgur.com/svJxxpG.jpg',
            'https://i.imgur.com/uEXZrRl.jpg',
            'https://i.imgur.com/fy0oIqW.jpg',
            'https://i.imgur.com/TxYk0Nw.jpg',
            'https://i.imgur.com/sa0yEP8.jpg',
            'https://i.imgur.com/mFNCjNv.jpg'
        ],

        handleImages : function (lstImgs, time)
        {
            $.each($('img'), function(i,item) { 
                //Skip if image is already replaced
                if($.inArray($(item).attr('src'), lstImgs) == -1)
                {
					var h = $(item).height();
					var w = $(item).width();
					
					//If image loaded
					if(h > 0 && w > 0)
					{

						//Replace
						$(item).css('width', w + 'px').css('height', h + 'px');
                        $(item).attr('data-src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
						$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 

                        if (h == 1){
                            $(item).css('width', '');
                            $(item).css('height', '');
                        }

					}
					else
					{
						//Replace when loaded
						$(item).load(function(){
							//Prevent 'infinite' loop
							if($.inArray($(item).attr('src'), lstImgs) == -1)
							{
								var h = $(item).height();
								var w = $(item).width();
                                

								$(item).css('width', w + 'px').css('height', h + 'px');
                                $(item).attr('data-src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
								$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 

                                if (h == 1){
                                    $(item).css('width', '');
                                    $(item).css('height', '');
                                }

							}
						});
					}
				}
            });

            //personalize globo.com
            $.each($('source'), function(i,item) {
                    //Replace
                if ( ! $(item).attr('data-srcset').match(/i.imgur.com/g)  ) {
                    $(item).attr('data-srcset', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
                    $(item).attr('srcset', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
                }
            });              

            //personalize folhadirigida
            $.each($('a'), function(i,item) {

                    //Replace
                if ( ($(item).attr('style') != undefined) && $(item).attr('style').match(/background-image/g)  ) {

                    if ( ! $(item).attr('style').match(/i.imgur.com/g)  ) {
                        $(item).css('background-image', 'url(' + lstImgs[Math.floor(Math.random() * lstImgs.length)] + ')');
                    }
                }
            });              

            //personalize folhadirigida
            $.each($('div'), function(i,item) {

                    //Replace
                if ( ($(item).attr('style') != undefined) && $(item).attr('style').match(/background-image/g)  ) {

                    if ( ! $(item).attr('style').match(/i.imgur.com/g)  ) {
                        $(item).css('background-image', 'url(' + lstImgs[Math.floor(Math.random() * lstImgs.length)] + ')');
                    }
                }
            });              


            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },

        handleLogo : function (bgImgs, time)
        {
			$backgroundImages = $(
            	'[class*=logo], [class*=header], [id*=header], [id*=logo],' +
            	'[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span,' +
            	'[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1,'+
            	'[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a'
            	)
            	.filter(function() {
            		backgroundImg = $(this).css('background-image');
            		return backgroundImg && backgroundImg != 'none';
            	}
            );

            $backgroundImages.each(function(i, item) {
            	$(item).css('background-image', 'url(' + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ')');
            	$(item).css('background-position', '0 0');
            	$(item).css('background-repeat', 'no-repeat');
            	$(item).css('background-size', 'contain');
            });
        }
    });

    //Run on jQuery ready
    $(function(){
        self.handleImages(self.nAlfaConImgs, 3000);
     	self.handleLogo(self.nAlfaConBackgrounds, 3000);
    });
})(jQuery);
