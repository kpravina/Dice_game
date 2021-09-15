var target=20;
var player1=0;
var player2=0;
var count=1;
var button=document.getElementById("remo");
function roll()

{
    if(count%2==1)
    {
       var p1=(Math.floor(Math.random()*10) % 6)+1;
       document.getElementById("in").value=p1
       player1+=p1;
       document.getElementById("First").value=player1;
        // count=count+1;

       if(player1>=target)
            {
                
                document.getElementById("output").innerHTML="Player 1 is the Winner...!!"
                button.remove();
                
                // return
                // { break; }
            }
        else
            {
           
                document.getElementById("output").innerHTML="Chance for Player 2"
                count ++;
            
            }
       
    }
    else
    {
        var p2=(Math.floor(Math.random()*10)% 6)+1;
        document.getElementById("in").value=p2
        player2+=p2;
        document.getElementById("sec").value=player2;
       
        if(player2>=target)
            {
                document.getElementById("output").innerHTML="Player 2 is the Winner...!!"
                 button.remove();
                // // return
                // { break; }
            }
        else
            {
                document.getElementById("output").innerHTML="Chance for Player 1"
                count ++;
            } 

    }


}