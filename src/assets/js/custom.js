$(document).ready(function(){

    $("#rate").rate({
        selected_symbol_type: 'image2',
        max_value: 5,
        step_size: 1,
        update_input_field_name: $("#inputRate"),

        only_select_one_symbol: true,
        symbols:{
            image2: {
                base: ['<div style="background-image: url(\'./img/emoji1.png\');" class="im2">&nbsp;</div>', 
                       '<div style="background-image: url(\'./img/emoji2.png\');" class="im2">&nbsp;</div>',
                       '<div style="background-image: url(\'./img/emoji3.png\');" class="im2">&nbsp;</div>',
                       '<div style="background-image: url(\'./img/emoji4.png\');" class="im2">&nbsp;</div>',
                       '<div style="background-image: url(\'./img/emoji5.png\');" class="im2">&nbsp;</div>',],
                hover: ['<div style="background-image: url(\'./img/emoji1.png\');" class="im2">&nbsp;</div>',
                       '<div style="background-image: url(\'./img/emoji2.png\');" class="im2">&nbsp;</div>',
                       '<div style="background-image: url(\'./img/emoji3.png\');" class="im2">&nbsp;</div>',
                       '<div style="background-image: url(\'./img/emoji4.png\');" class="im2">&nbsp;</div>',
                       '<div style="background-image: url(\'./img/emoji5.png\');" class="im2">&nbsp;</div>',],
                selected: ['<div style="background-image: url(\'./img/emoji1.png\');" class="im2">&nbsp;</div>',
                       '<div style="background-image: url(\'./img/emoji2.png\');" class="im2">&nbsp;</div>',
                       '<div style="background-image: url(\'./img/emoji3.png\');" class="im2">&nbsp;</div>',
                       '<div style="background-image: url(\'./img/emoji4.png\');" class="im2">&nbsp;</div>',
                       '<div style="background-image: url(\'./img/emoji5.png\');" class="im2">&nbsp;</div>',],
            },
        },
    });
});

$(function() {
  var chatWidget = (".chat-widget-container"),
      chatBox = $(".chat-box-container");

  $(".chat-box-content").hide();
  $(".message-box").hide();
  $(".messages").hide();


	/* button */

  $( "#buttonCon" ).click(function() {
    $( "#buttonCon" ).addClass( "onclic", 250, validate);
    $(".chat-box-content").css( "z-index", "3" );
    setTimeout(function() {
    	$(".buttonCon").hide();
	    $(".message-box").show();
  		$(".messages").show();
	  }, 3000);

  });

    $( ".buttonUser" ).click(function() {
    $(".chat-box-content").css( "z-index", "3" );
      $(".connectbtn1").hide();
      $(".message-box").show();
      $(".messages").show();
      $(".chat-box-nav").html("ChatRoom with "+$(this).html());

  });

  function validate() {
    setTimeout(function() {
      $( "#buttonCon" ).removeClass( "onclic" );
      $( "#buttonCon" ).addClass( "validate", 450, callback );
    }, 2250 );
  }
    function callback() {
      setTimeout(function() {
        $( "#buttonCon" ).removeClass( "validate" );
      }, 1250 );
    }
  
  $(chatWidget).click(function(e){
    
    e.preventDefault();
    
    $(chatBox).toggleClass("show");
    $(".chat-box-content").toggle();
    $(chatWidget).toggleClass("open");
  })

  $(".messages").addClass("thin");
	$(".messages").mouseover(function(){
	  $(this).removeClass("thin");
	});
	$(".messages").mouseout(function(){
	  $(this).addClass("thin");
	});
	$(".messages").scroll(function () {
	  $(".messages").addClass("thin");
	});

	  
});

