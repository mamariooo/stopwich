 const interval_ms=1000/60;                              //له تعديل تاني تحت  //كل تحدث جديد 
  let timerID;   //
  let lasttimerstartime =0;                  // اخر وقت وصلنه 
  let milliseapsedbeforellast=0;// ثممنذ  قبل اخر ثم بعد اخر مره 



const timer =document.getElementById("timer");
const startbutton=document.getElementById("start-button");   //اعمل استعاد للكود الي هوا في لغه html 
const stopbutton=document.getElementById("stop-button");
const resetbutto=document.getElementById("reset-button");

startbutton.addEventListener("click",starttimer);   //خد الكود الي تم استعاده ونفذ داله الجافاا 
stopbutton.addEventListener("click",stoptimer);
resetbutto.addEventListener("click",resettimer);

function starttimer(){
    startbutton.Disabled=true;       ///يقوم بتعطيل الزر ويشتغل stop فقط   
    stopbutton.Disabled=false;            //disabled يقوم يعطيل الزور خصايه 
    resetbutto.Disabled=true;

    lasttimerstartime =Date.now(); 
    timerID =setInterval(updatetimer, interval_ms);  //تشغيل الداله تكراره 
        
    };

    function stoptimer(){
        startbutton.Disabled=false;
        stopbutton.Disabled=true;
        resetbutto.Disabled=false;
        milliseapsedbeforellast += Date.now() - lasttimerstartime;  ///الوقت الحالي - وقت اخر 
        clearInterval(timerID);

        };

        function resettimer(){   //بيعمل اعاده لوقت
            resetbutto.Disabled=true;       //تعطيله 
            timer.textContent="00:00:00"; 
            milliseapsedbeforellast =0;  //بصفر من بدء ونخلي العدد يعمله من الجديده

    
            };
            function updatetimer(){

                const millliselapsed =Date.now()-lasttimerstartime+milliseapsedbeforellast ;
                const secondselapsed =millliselapsed / 1000;
                 const minuteselapsed =secondselapsed / 60;


                const millistext=formatebnumber(millliselapsed %1000 ,3);
                const secondstext= formatebnumber(Math.floor(secondselapsed) % 60,2 );  //خانه دايجتال 
                const minutestext= formatebnumber(Math.floor(minuteselapsed),2);
                timer.textContent = `${minutestext}:${secondstext}:${millistext}`;

            };

            function formatebnumber (number,desiredlength){

                const stringnumber=String(number);
                if(stringnumber.length>desiredlength){
                    return stringnumber.slice(0,desiredlength);    //slic المتغيرات التي يقبلها هي الموقع الأول والموقع الأخير لمحارف السلسلة الجزئية
                };
        return stringnumber .padStart(desiredlength,"0");
            };
        
    



