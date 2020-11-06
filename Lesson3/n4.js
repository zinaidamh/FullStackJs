//Система продажи билетов 

//Реализовать систему продажи билетов, которая позволит продавать билеты и возвращать их   
//ticketWindow.createEvent('Concert', 500) // создаем концерт и указываем цену билетов
//ticketWindow.buyTicket('Concert') /* Добавляем сумму за билет в кассу, возвращаем
//случайный шестизначный ID билета, создать ID можно любым способом */

//ticketWindow.returnTicket('123456') /* Возвращаем билет, если в системе такой id записан
//как проданный, он должен быть удален из списка проданных и из кассы должна быть
//вычтена соответствующая его цене сумма */


function ticketWindow()
{
  let events=[];
  let sum=0;
       
  this.createEvent = function(concertName,ticketPrice)
  {
     let concert=
     {
      name: concertName,
      price: ticketPrice,
      tickets:[]
     };
     events.push(concert); 
   }
 
   this.buyTicket=function(concertName)
   {
         
      let concert=events.find(e=>e.name==concertName);
      
      if (concert!=undefined)
      {
          let ticket=
          {
              ID:  Math.floor(Math.random() * 1000000).toString()
          }
        
          concert.tickets.push(ticket);
          sum += concert.price;
          console.log("Event " + concert.name+ ". Ticket N " + ticket.ID)
          return ticket.ID;
      }
   }
   this.returnTicket=function(ticketID)
   {
       
       for(let i=0; i<events.length; i++)
       {
          let concert=events[i];
          for (let j=0; j<=concert.tickets.length; j++)
          {
              let ticket=concert.tickets[j];
              if (ticket.ID==ticketID)
              {
                 sum -= concert.price;
                 console.log('sum= '+sum);
                 let removedTicket=concert.tickets.splice(j,1);
                 console.log("Event " + concert.name+ ". Ticket N " + ticket.ID + " returned");
                 return removedTicket;
              }
          }
          
        }
        console.log('Ticket '+ ticketID + ' not found')    
    }
}

tk = new ticketWindow()
tk.createEvent('Concert', 500);
tk.createEvent('Concert A', 200);
tk.createEvent('Concert B',400);
let t1=tk.buyTicket('Concert');
let t2=tk.buyTicket('Concert');
let t3=tk.buyTicket('Concert A');
let t4=tk.buyTicket('Concert B');
let t5=tk.buyTicket('Concert A');
tk.returnTicket(t2);

