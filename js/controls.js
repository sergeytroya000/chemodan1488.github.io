function checkForm(form){
	var returnValue = true;
	var gotError = false;
	$("input.required, select.required", $(form)).each(function(){
		var obj = $(this);
		if((obj.val()=="" || obj.val()==null) && obj.attr("message")!=undefined && gotError==false){
			gotError = true;
			alert(obj.attr("message"));
			obj.blur();
			returnValue = false;
		}
	});
	if(returnValue!=false){
		var callback = $(form).attr("callback");
		if(callback!=undefined){
			returnValue = eval(callback+'();');
		}
	}
	return returnValue;
}


function popoverInit(){
    $('#item-desc li a').bind('mouseover',(function(){
       $(this).prev().fadeIn();
    })).click(function(e){e.preventDefault();});

    $('#item-desc li a').bind('mouseout',(function(e){
        e.preventDefault();
        $(this).prev().fadeOut();
    }));
}

function quick_buy(){
    var closeOut = function(e){
        if(!$(e.target).closest('.popup-quick-buy').length && !$(e.target).hasClass('btn-buy-quick')){
            close();
        }
    }

    var close = function(){
        $('.popup-quick-buy').fadeOut();
        setTimeout(function(){
            $('.popup-quick-buy .content-2').hide();
            $('.popup-quick-buy .content-1').show();
        },500)

    }

    $('.btn-buy-quick').bind('click',(function(e){
        e.preventDefault();
        $('.popup-quick-buy').fadeIn();
    }));

    $('.popup-quick-buy .close').bind('click',function(e){
        e.preventDefault();
        close();
    });

    $('.popup-quick-buy .close-link').bind('click',function(e){
        e.preventDefault();
        close();
    });



    $(document).bind('click',function(e){
        closeOut(e);
    });

    $('#buy-quick-popup').bind('click',function(){
        console.log($('.btn-buy-quick').attr('href'));
        var data = $(this).parent().serialize();
        if($(this).parent().find('input').val() == ''){
            $('.popup-quick-buy .error').css('display','inline');
        }else{
            $.ajax({
                type: "POST",
                url: $('.btn-buy-quick').attr('href'),
                data: data
            });
            $('.popup-quick-buy .content-1').hide();
            $('.popup-quick-buy .content-2').show();
        }
    })
}


$(document).ready(function(){
	
	$("form").submit(function(e){
		e.preventDefault();
		returnValue = checkForm(this);
		if(returnValue===true){
			$(this).unbind("submit").submit();
		}
	});

    popoverInit();
    quick_buy();
	
});