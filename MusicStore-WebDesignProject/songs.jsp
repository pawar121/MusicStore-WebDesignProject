

    <%@ page import="java.util.List" %>
    <%
   	String [] cities = new String[12];
	
	cities[0] = "hill";
	cities[1] = "sting";
	cities[2] = "red";
	cities[3] = "dilse";
	cities[4] = "hello";
	cities[5] = "firestone";
	cities[6] = "hotline";
	cities[7] = "intense";
	cities[8] = "imagine";
	cities[9] = "elvis";
	cities[10] = "21-guns";
	cities[11] = "backstreet";


 	

	
	//read user input
	String song = request.getParameter("q");  //q is the name of the parameter from AJAX call

	//I am using UL/LI to return the data to xmlHttp object. Could be anything.
	
	String result = "<a href='Mbigthumb' onclick ='fn3(this)'><img class ='lmn' src ='"; // to be displayed at html 
	String ch="";
    song = song.toLowerCase();

	for (String currentCity : cities)   //new for loop
	{
	    currentCity = currentCity.toLowerCase();
		if (currentCity.contains(song))
		{
		   
			result = result + currentCity;
			result = result + ".jpg'></a><a href='Mbigthumb' onclick ='fn3(this)'><img class ='lmn' src ='";   
			
		}

	}
   
	 
	      
    try
    {

       result = result.substring(0,result.length()-65);  // to remove extra tag
    }
    catch(Exception e)
    {
         result = "<h2>No Match Found</h2>";
    }
 
    if(result.length()==0)
    {
	     result = "<h2><b>No Match Found</b></h2>";
    }
 	

	
	out.println(result);   //send this to xmlHttp object
%>