function age()
     {
       var date_1 = document.getElementById("date").value;
       var month_1 = document.getElementById("month").value;
       var year_1 = document.getElementById("year").value;

      var date = new Date(); // new Date() is a javascript method that collects time from your device
      var date_2 = date.getDate();
      
      var month_2 = 1 + date.getMonth();
       
      var year_2 = date.getFullYear();
      

      var month = [31,28,31,30,31,30,31,31,30,31,30];

      if(date_1 > date_2)
      {
        date_2 = date_2 + month[month_2 - 1];
        month_2 = month_2 - 1;
      }

      if(month_1 > month_2)
      {
       month_2 = month_2 + 12;
       year_2 = year_2 - 1;
      }

      var d1 = date_2 - date_1;
      var m1 = month_2 - month_1;
      var y1 = year_2 - year_1;
      
      document.getElementById("age").innerHTML = "Your Age is " +y1+ " Years "+m1+ " Months "+d1+ " Days ";

     }