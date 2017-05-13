$("#submit_button").click(function(){ 
     
    $("#submit_conf").show(); 
    return false; 
    $("#submit_button").data-dismiss("modal"); 
     
});          
    $("#hill").mouseenter(function(){ 
        $(".standard1").show("fast"); 
    }); 
    $("#hill").mouseout(function(){ 
        $(".standard1").hide("fast"); 
    });   
    $("#sting").mouseenter(function(){ 
        $(".standard2").show("fast"); 
    }); 
    $("#sting").mouseout(function(){ 
        $(".standard2").hide("fast"); 
    });  
    $("#red").mouseenter(function(){ 
        $(".standard3").show("fast"); 
    }); 
    $("#red").mouseout(function(){ 
        $(".standard3").hide("fast"); 
    });   
    $("#dilse").mouseenter(function(){ 
        $(".standard4").show("fast"); 
    }); 
    $("#dilse").mouseout(function(){ 
        $(".standard4").hide("fast"); 
    });  
    $("#hello").mouseenter(function(){ 
        $(".standard11").show("fast"); 
    }); 
    $("#hello").mouseout(function(){ 
        $(".standard11").hide("fast"); 
    });    
    $("#firestone").mouseenter(function(){ 
        $(".standard12").show("fast"); 
    }); 
    $("#firestone").mouseout(function(){ 
        $(".standard12").hide("fast"); 
    });  
    $("#hotline").mouseenter(function(){ 
        $(".standard13").show("fast"); 
    }); 
    $("#hotline").mouseout(function(){ 
        $(".standard13").hide("fast"); 
    });   
    $("#intense").mouseenter(function(){ 
        $(".standard14").show("fast"); 
    }); 
    $("#intense").mouseout(function(){ 
        $(".standard14").hide("fast"); 
    });  
    
    $("#imagine").mouseenter(function(){ 
        $(".standard21").show("fast"); 
    }); 
    $("#imagine").mouseout(function(){ 
        $(".standard21").hide("fast"); 
    });    
    $("#elvis").mouseenter(function(){ 
        $(".standard22").show("fast"); 
    }); 
    $("#elvis").mouseout(function(){ 
        $(".standard22").hide("fast"); 
    });  
    $("#21guns").mouseenter(function(){ 
        $(".standard23").show("fast"); 
    }); 
    $("#21guns").mouseout(function(){ 
        $(".standard23").hide("fast"); 
    });   
    $("#backstreet").mouseenter(function(){ 
        $(".standard24").show("fast"); 
    }); 
    $("#backstreet").mouseout(function(){ 
        $(".standard24").hide("fast"); 
    });      
    $("#highway").mouseenter(function(){ 
        $(".standard31").show("fast"); 
    }); 
    $("#highway").mouseout(function(){ 
        $(".standard31").hide("fast"); 
    });    
    $("#sweetchild").mouseenter(function(){ 
        $(".standard32").show("fast"); 
    }); 
    $("#sweetchild").mouseout(function(){ 
        $(".standard32").hide("fast"); 
    });  
    $("#stairwaytoheaven").mouseenter(function(){ 
        $(".standard33").show("fast"); 
    }); 
    $("#stairwaytoheaven").mouseout(function(){ 
        $(".standard33").hide("fast"); 
    });   
    $("#sanitarium").mouseenter(function(){ 
        $(".standard34").show("fast"); 
    }); 
    $("#sanitarium").mouseout(function(){ 
        $(".standard34").hide("fast"); 
    });      
    $(".arrow").click(function () { 
        $("#myCarousel").slideUp("slow", function () {  
                   // $("div.thumb").show(); 
                   $(".arrow").hide(); 
                   $(".footer").hide(); 
                   $(".back_arrow").show(); 
                    
                   $(".bigthumb").show(); 
                   $(".bigthumb0").show(); 
                   $(".bigthumb1").show(); 
                   $(".bigthumb2").show(); 
                   $(".bigthumb3").show();   
                    
               });     
    });    
    $(".back_arrow").click(function () { 
        $(".bigthumb").slideUp("slow", function () { 
             
            $("#myCarousel").show(); 
            $(".back_arrow").hide(); 
            $(".arrow").show(); 
             
            $(".footer").show();                      
        });     
    });    
    $(document).ready(function(){ 
        $("#myBtn").click(function(){ 
            $("#myModal").modal(); 
        }); 
    });      
    $(document).ready(function(){  
        $("#signup_link").click(function(){ 
             
            $("#myModal1").modal(); 
            $("myModal").hide(); 
        }); 
    });  
    $("#alternative").click(function(){ 
         
       $("#myCarousel").slideUp("slow",function(){ 
           $(".arrow").hide(); 
           $(".back_arrow").show(); 
           $(".right_arrow").hide(); 
           $(".bigthumb0").show();     
           $(".footer").hide();    
       }); 
   }); 
    $("#classical").click(function(){ 
       $("#myCarousel").slideUp("slow",function(){ 
           $(".arrow").hide(); 
           $(".back_arrow").show(); 
           $(".right_arrow").hide(); 
           $(".bigthumb2").show();  
           $(".footer").hide();        
       }); 
   }); 
    $("#Latest").click(function(){ 
         
       $("#myCarousel").slideUp("slow",function(){ 
           $(".arrow").hide(); 
           $(".back_arrow").show(); 
           $(".right_arrow").hide(); 
           $(".bigthumb1").show(); 
           $(".footer").hide();         
       }); 
   }); 
    $("#metal").click(function(){ 
        
       $("#myCarousel").slideUp("slow",function(){ 
           $(".arrow").hide(); 
           $(".back_arrow").show(); 
           $(".right_arrow").hide(); 
           $(".bigthumb3").show();      
           $(".footer").hide();   
       });  
   });               
// to enable and disable logout button 
$(".dropdown-menu").hover(function(){ 
     
    if($("#my_user").html() == 'User<span class="caret"></span>') 
    { 
      
        $("#logout").addClass("disabled"); 
    } 
 
    if(!($("#my_user").html() == 'User<span class="caret"></span>')) 
    { 
      
        $("#logout").removeClass("disabled"); 
    }  
});    
$("#logout").click(function() 
{ 
 $("#my_user").html('User<span class="caret"></span>'); 
 $("#logout").addClass("disabled"); 
 $("#myBtn").show();  
});      
    $("#login_user").click(function(){ 
         
        var a = $("#usrname").val(); 
        var p = $("#psw").val(); 
         
        if((a=="pawar") && (p=="pawar")) 
        {    
             
           $("#my_user").html(a); 
           $("#myBtn").hide(); 
           $("#usrname").val(""); 
           $("#psw").val(""); 
             
       } 
       else { 
          
         $("#usrname").css('border-color', 'red'); 
         $("#psw").css('border-color', 'red'); 
         $("#usrname").val(""); 
         $("#psw").val(""); 
         return false;  
           
     }         
      
 }); 
      
    $(".go").click(function(){ 
     alert("Successfully Registered"); 
    });    
function ajaxFunction(cityName)   //functionName could be anything 
{ 
    //1. Create XmlHttpRequest Object 
    //This could be written into an external .js file that could be used within other pages as well. 
    if(cityName == "") 
    { 
        $(".abc").html(""); 
        return; 
    } 
     
    var xmlHttp; 
    $(".carousel").hide(3000); 
    $(".arrow").hide(3000); 
    $(".footer").hide();  
       
    try     // Firefox, Opera 8.0+, Safari 
    { 
        xmlHttp=new XMLHttpRequest(); 
    } 
    catch (e) 
    { 
        try  // Internet Explorer 
        { 
            xmlHttp=new ActiveXObject("Msxml2.XMLHTTP"); 
        } 
        catch (e) 
        { 
            try 
            { 
                xmlHttp=new ActiveXObject("Microsoft.XMLHTTP"); 
            } 
            catch (e) 
            { 
                alert("Your browser does not support AJAX!"); 
                return false; 
            } 
        } 
    } 
     
    //2. Call the server-side script 
    //cityName is the function parameter passed when the JS function is called 
    xmlHttp.open("GET", "songs.jsp?q=" + cityName, true);   //q is the name of the parameter to be used in JSP 
    xmlHttp.send();  
//leave blank, or pass null. Not used with GET requests  
    //3. Check the server-data is ready 
    xmlHttp.onreadystatechange=function() 
    { 
        if(xmlHttp.readyState==4) 
        { 
            //4. Manipulate the DOM 
             
            var serverData = xmlHttp.responseText; 
             
             
           //erverData = serverData.substring(0,serverData.length); 
           $(".abc").html(serverData);  
           if(serverData == "<h2>No Match Found</h2>") 
           {   
            $(".abc").html(serverData); 
        } 
         
        if(serverData.length>2) 
        { 
          
            $("#myCarousel").show(); 
        }  
         
    } 
}  
    
}        
function fn3(c) 
{ 
     
    for(var i=0;i<c.children.length; i++) { 
        var a = c.children[i].src; 
        if(a.match("sting")) 
        { 
            c.href = "sting.mp3" 
        } 
        if(a.match("sting")) 
        { 
            c.href = "sting.mp3" 
        } 
        if(a.match("red")) 
        { 
            c.href = "red.mp3" 
        } 
        if(a.match("dilse")) 
        { 
            c.href = "dilse.mp3" 
        } 
        if(a.match("hello")) 
        { 
            c.href = "hello.mp3" 
        } 
        if(a.match("hill")) 
        { 
            c.href = "audio.mp3" 
        } 
        if(a.match("firestone")) 
        { 
            c.href = "firestone.mp3" 
        }  
        if(a.match("hotline")) 
        { 
            c.href = "hotline.mp3" 
        }   
        if(a.match("intense")) 
        { 
            c.href = "intense.mp3" 
        }   
        if(a.match("imagine")) 
        { 
            c.href = "imagine.mp3" 
        }   
        if(a.match("elvis")) 
        { 
            c.href = "elvis.mp3" 
        }   
        if(a.match("21guns")) 
        { 
            c.href = "21guns.mp3" 
        }   
        if(a.match("backstreet")) 
        { 
            c.href = "backstreet.mp3" 
        }  
        if(a.match("highwaytohell")) 
        { 
            c.href = "highwaytohell.mp3" 
        }   
        if(a.match("sweetchild")) 
        { 
            c.href = "sweetchild.mp3" 
        }   
        if(a.match("stairwaytoheaven")) 
        { 
            c.href = "stairwaytoheaven.mp3" 
        }  
        if(a.match("sanitarium")) 
        { 
            c.href = "sanitarium.mp3" 
        }   